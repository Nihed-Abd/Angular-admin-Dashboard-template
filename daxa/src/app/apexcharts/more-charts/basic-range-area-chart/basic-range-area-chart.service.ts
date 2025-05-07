import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicRangeAreaChartService {

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
                            name: "New York Temperature",
                            data: [
                                {
                                    x: "Jan",
                                    y: [-2, 4]
                                },
                                {
                                    x: "Feb",
                                    y: [-1, 6]
                                },
                                {
                                    x: "Mar",
                                    y: [3, 10]
                                },
                                {
                                    x: "Apr",
                                    y: [8, 16]
                                },
                                {
                                    x: "May",
                                    y: [13, 22]
                                },
                                {
                                    x: "Jun",
                                    y: [18, 26]
                                },
                                {
                                    x: "Jul",
                                    y: [21, 29]
                                },
                                {
                                    x: "Aug",
                                    y: [21, 28]
                                },
                                {
                                    x: "Sep",
                                    y: [17, 24]
                                },
                                {
                                    x: "Oct",
                                    y: [11, 18]
                                },
                                {
                                    x: "Nov",
                                    y: [6, 12]
                                },
                                {
                                    x: "Dec",
                                    y: [1, 7]
                                }
                            ]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "rangeArea",
                        toolbar: {
                            show: true
                        }
                    },
                    stroke: {
                        curve: "straight"
                    },
                    title: {
                        text: "New York Temperature (all year round)",
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
                        hover: {
                            sizeOffset: 5
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    yaxis: {
                        labels: {
                            show: true,
                            formatter: (val:any) => {
                                return val + "°C";
                            },
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        },
                        axisBorder: {
                            show: false
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
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_range_area_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}