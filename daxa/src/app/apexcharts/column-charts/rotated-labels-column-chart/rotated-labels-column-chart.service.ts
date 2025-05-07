import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class RotatedLabelsColumnChartService {

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
                            name: "Servings",
                            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
                        }
                    ],
                    annotations: {
                        points: [
                            {
                                x: "Bananas",
                                seriesIndex: 0,
                                label: {
                                    borderColor: "#0f79f3",
                                    offsetY: 0,
                                    style: {
                                        fontSize: '14px',
                                        color: "#ffffff",
                                        background: "#0f79f3"
                                    },
                                    text: "Bananas are good"
                                }
                            }
                        ]
                    },
                    chart: {
                        height: 350,
                        type: "bar",
                        toolbar: {
                            show: true
                        }
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "50%",
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: 2
                    },
                    grid: {
                        row: {
                            colors: ["#ffffff", "#f4f6fc"]
                        },
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
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
                            rotate: -45,
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        },
                        categories: [
                            "Apples",
                            "Oranges",
                            "Strawberries",
                            "Pineapples",
                            "Mangoes",
                            "Bananas",
                            "Blackberries",
                            "Pears",
                            "Watermelons",
                            "Cherries",
                            "Pomegranates",
                            "Tangerines",
                            "Papayas"
                        ],
                        tickPlacement: "on"
                    },
                    yaxis: {
                        title: {
                            text: "Servings",
                            style: {
                                color: "#475569",
                                fontSize: "14px",
                                fontWeight: 500
                            }
                        },
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
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "light",
                            type: "horizontal",
                            shadeIntensity: 0.25,
                            gradientToColors: undefined,
                            inverseColors: true,
                            opacityFrom: 0.85,
                            opacityTo: 0.85,
                            // stops: [50, 0, 100]
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#rotated_labels_column_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}