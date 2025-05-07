import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PolygonRadarChartService {

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
                            name: "Series 1",
                            data: [20, 100, 40, 30, 50, 80, 33]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "radar"
                    },
                    dataLabels: {
                        enabled: true
                    },
                    plotOptions: {
                        radar: {
                            size: 140,
                            polygons: {
                                fill: {
                                    colors: ["#f8f8f8", "#ffffff"]
                                }
                            }
                        }
                    },
                    title: {
                        text: "Radar with Polygon Fill",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    colors: [
                        "#0f79f3"
                    ],
                    markers: {
                        size: 4,
                        colors: ["#ffffff"],
                        strokeColors: ["#0f79f3"],
                        strokeWidth: 2
                    },
                    tooltip: {
                        y: {
                            formatter: function(val:any) {
                                return val;
                            }
                        }
                    },
                    xaxis: {
                        categories: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ]
                    },
                    yaxis: {
                        tickAmount: 7
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#polygon_radar_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}