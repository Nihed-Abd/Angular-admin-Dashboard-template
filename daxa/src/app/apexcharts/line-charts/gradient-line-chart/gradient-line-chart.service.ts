import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class GradientLineChartService {

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
                            name: "Likes",
                            data: [0, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "line",
                        toolbar: {
                            show: true
                        }
                    },
                    stroke: {
                        width: 7,
                        curve: "smooth"
                    },
                    xaxis: {
                        type: "datetime",
                        categories: [
                            "1/11/2000",
                            "2/11/2000",
                            "3/11/2000",
                            "4/11/2000",
                            "5/11/2000",
                            "6/11/2000",
                            "7/11/2000",
                            "8/11/2000",
                            "9/11/2000",
                            "10/11/2000",
                            "11/11/2000",
                            "12/11/2000",
                            "1/11/2001",
                            "2/11/2001",
                            "3/11/2001",
                            "4/11/2001",
                            "5/11/2001",
                            "6/11/2001"
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
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    },
                    title: {
                        text: "Social Media",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "dark",
                            gradientToColors: ["#FDD835"],
                            shadeIntensity: 1,
                            type: "horizontal",
                            opacityFrom: 1,
                            opacityTo: 1,
                            // stops: [0, 100, 100, 100]
                        }
                    },
                    markers: {
                        size: 4,
                        colors: ["#FFA41B"],
                        strokeColors: "#fff",
                        strokeWidth: 2,
                        hover: {
                            size: 7
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
                const chart = new ApexCharts(document.querySelector('#gradient_line_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}