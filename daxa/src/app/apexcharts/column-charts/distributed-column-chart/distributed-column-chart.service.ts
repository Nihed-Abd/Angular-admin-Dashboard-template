import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class DistributedColumnChartService {

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
                            name: "distibuted",
                            data: [21, 22, 10, 28, 16, 21, 13, 30]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "bar",
                        events: {
                            click: function(chart:any, w:any, e:any) {
                                // console.log(chart, w, e)
                            }
                        }
                    },
                    colors: [
                        "#0f79f3",
                        "#796df6",
                        "#00cae3",
                        "#ffb264",
                        "#2ed47e",
                        "#e74c3c",
                        "#26a69a",
                        "#d10ce8"
                    ],
                    plotOptions: {
                        bar: {
                            columnWidth: "45%",
                            distributed: true
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    legend: {
                        offsetY: 5,
                        show: false,
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
                        categories: [
                            ["John", "Doe"],
                            ["Joe", "Smith"],
                            ["Jake", "Williams"],
                            "Amber",
                            ["Peter", "Brown"],
                            ["Mary", "Evans"],
                            ["David", "Wilson"],
                            ["Lily", "Roberts"]
                        ],
                        labels: {
                            show: true,
                            style: {
                                colors: [
                                    "#0f79f3",
                                    "#796df6",
                                    "#00cae3",
                                    "#ffb264",
                                    "#2ed47e",
                                    "#e74c3c",
                                    "#26a69a",
                                    "#d10ce8"
                                ],
                                fontSize: "14px"
                            }
                        },
                        axisBorder: {
                            show: false,
                            color: '#e0e0e0'
                        },
                        axisTicks: {
                            show: true,
                            color: '#e0e0e0'
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
                const chart = new ApexCharts(document.querySelector('#distributed_column_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}