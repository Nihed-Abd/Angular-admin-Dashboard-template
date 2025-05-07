import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PieMonochromeChartService {

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
                    series: [25, 15, 44, 55, 41, 17],
                    chart: {
                        width: "100%",
                        type: "pie"
                    },
                    labels: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ],
                    theme: {
                        monochrome: {
                            enabled: true
                        }
                    },
                    title: {
                        text: "Number of leads",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
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
                const chart = new ApexCharts(document.querySelector('#pie_monochrome_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}