import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class StackedColumnChartService {

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
                            name: "Product A",
                            data: [44, 55, 41, 67, 22, 43]
                        },
                        {
                            name: "Product B",
                            data: [13, 23, 20, 8, 13, 27]
                        },
                        {
                            name: "Product C",
                            data: [11, 17, 15, 15, 21, 14]
                        },
                        {
                            name: "Product D",
                            data: [21, 7, 25, 13, 22, 8]
                        }
                    ],
                    chart: {
                        type: "bar",
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        }
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0
                                }
                            }
                        }
                    ],
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    colors: [
                        "#0f79f3", "#00cae3", "#ffb264", "#e74c3c"
                    ],
                    xaxis: {
                        type: "category",
                        categories: [
                            "01/2024",
                            "02/2024",
                            "03/2024",
                            "04/2024",
                            "05/2024",
                            "06/2024"
                        ],
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
                    legend: {
                        position: "right",
                        fontSize: "14px",
                        offsetY: 40,
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 0,
                            vertical: 5
                        }
                    },
                    fill: {
                        opacity: 1
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
                        borderColor: "#e0e0e0",
                        row: {
                            colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                            opacity: 0.5
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#stacked_column_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}