import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class RangeColumnChartService {

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
                            name: "Blue",
                            data: [
                                {
                                    x: "Team A",
                                    y: [1, 5]
                                },
                                {
                                    x: "Team B",
                                    y: [4, 6]
                                },
                                {
                                    x: "Team C",
                                    y: [5, 8]
                                },
                                {
                                    x: "Team D",
                                    y: [3, 11]
                                }
                            ]
                        },
                        {
                            name: "Green",
                            data: [
                                {
                                    x: "Team A",
                                    y: [2, 6]
                                },
                                {
                                    x: "Team B",
                                    y: [1, 3]
                                },
                                {
                                    x: "Team C",
                                    y: [7, 8]
                                },
                                {
                                    x: "Team D",
                                    y: [5, 9]
                                }
                            ]
                        }
                    ],
                    chart: {
                        type: "rangeBar",
                        height: 350,
                        toolbar: {
                            show: true
                        }
                    },
                    colors: [
                        "#0f79f3", "#e74c3c"
                    ],
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    dataLabels: {
                        enabled: true
                    },
                    legend: {
                        show: true,
                        offsetY: 5,
                        fontSize: '14px',
                        position: "bottom",
                        horizontalAlign: "center",
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 5
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0",
                        row: {
                            colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                            opacity: 0.5
                        }
                    },
                    xaxis: {
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
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#range_column_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}