import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicTimelineChartService {

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
                            data: [
                                {
                                    x: "Code",
                                    y: [
                                        new Date("2019-03-02").getTime(),
                                        new Date("2019-03-04").getTime()
                                    ]
                                },
                                {
                                    x: "Test",
                                    y: [
                                        new Date("2019-03-04").getTime(),
                                        new Date("2019-03-08").getTime()
                                    ]
                                },
                                {
                                    x: "Validation",
                                    y: [
                                        new Date("2019-03-08").getTime(),
                                        new Date("2019-03-12").getTime()
                                    ]
                                },
                                {
                                    x: "Deployment",
                                    y: [
                                        new Date("2019-03-12").getTime(),
                                        new Date("2019-03-18").getTime()
                                    ]
                                }
                            ]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "rangeBar"
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true
                        }
                    },
                    xaxis: {
                        type: "datetime",
                        axisBorder: {
                            show: false,
                            color: '#e0e0e0'
                        },
                        axisTicks: {
                            show: true,
                            color: '#e0e0e0'
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        },
                        axisBorder: {
                            show: false
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    },
                    colors: [
                        "#0f79f3"
                    ],
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_timeline_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}