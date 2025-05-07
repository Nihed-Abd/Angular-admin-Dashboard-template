import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MultipleRadarChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    async loadChart(): Promise<void> {
        if (this.isBrowser) {
            try {
                // Dynamically import ApexCharts
                const ApexCharts = (await import('apexcharts')).default;

                // Define chart options
                const options = {
                    series: [
                        {
                            name: "Series Blue",
                            data: [80, 50, 30, 40, 100, 20]
                        },
                        {
                            name: "Series Green",
                            data: [20, 30, 40, 80, 20, 80]
                        },
                        {
                            name: "Series Orange",
                            data: [44, 76, 78, 13, 43, 10]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "radar",
                        dropShadow: {
                            enabled: true,
                            blur: 1,
                            left: 1,
                            top: 1
                        }
                    },
                    title: {
                        text: "Radar Chart - Multi Series",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    stroke: {
                        width: 0
                    },
                    fill: {
                        opacity: 0.4
                    },
                    markers: {
                        size: 0
                    },
                    xaxis: {
                        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
                        labels: {
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        }
                    },
                    legend: {
                        offsetY: 0,
                        fontSize: "14px",
                        position: "bottom",
                        horizontalAlign: "center",
                        labels: {
                            colors: '#919aa3'
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#multiple_radar_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}