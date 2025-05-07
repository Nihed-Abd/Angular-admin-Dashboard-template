import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ActiveStudentsService {

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
                            name: "Monthly",
                            type: "column",
                            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                        },
                        {
                            name: "Weekly",
                            type: "area",
                            data: [44, 55, 41, 65, 22, 43, 21, 41, 56, 27, 43]
                        },
                        {
                            name: "Daily",
                            type: "line",
                            data: [30, 25, 36, 30, 45, 35, 65, 52, 59, 36, 39]
                        }
                    ],
                    chart: {
                        height: 460,
                        type: "line",
                        stacked: false,
                        toolbar: {
                            show: false
                        }
                    },
                    stroke: {
                        width: [0, 2, 5],
                        curve: "smooth"
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "45%"
                        }
                    },
                    colors:[
                        '#00cae3', '#d2d2e4', '#796df6'
                    ],
                    fill: {
                        opacity: [0.85, 0.25, 1],
                        gradient: {
                            inverseColors: false,
                            shade: "light",
                            type: "vertical",
                            opacityFrom: 0.85,
                            opacityTo: 0.55,
                            // stops: [0, 100, 100, 100]
                        }
                    },
                    legend: {
                        show: true,
                        offsetY: 6,
                        fontSize: '14px',
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        }
                    },
                    markers: {
                        size: 0
                    },
                    xaxis: {
                        categories: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov"
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
                    yaxis: {
                        labels: {
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        }
                    },
                    grid: {
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#lms_active_students_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}