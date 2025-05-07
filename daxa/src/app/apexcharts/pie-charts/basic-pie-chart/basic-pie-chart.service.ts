import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicPieChartService {

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
                    series: [44, 55, 13, 43, 22],
                    chart: {
                        width: 380,
                        type: "pie"
                    },
                    labels: [
                        "Team A", "Team B", "Team C", "Team D", "Team E"
                    ],
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ],
                    legend: {
                        offsetY: 0,
                        fontSize: "14px",
                        labels: {
                            colors: '#919aa3'
                        },
                        itemMargin: {
                            horizontal: 0,
                            vertical: 5
                        }
                    },
                    stroke: {
                        width: 0,
                        show: true
                    },
                    colors: [
                        // "#0f79f3", "#796df6", "#e74c3c", "#00cae3", "#ffb264"
                    ],
                    dataLabels: {
                        enabled: true,
                        style: {
                            fontSize: '14px',
                        },
                        dropShadow: {
                            enabled: false
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: function(val:any) {
                                return val + "%";
                            }
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_pie_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}