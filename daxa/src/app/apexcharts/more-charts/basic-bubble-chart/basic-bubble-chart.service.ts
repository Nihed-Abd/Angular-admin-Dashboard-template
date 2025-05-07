import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicBubbleChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    private generateData(baseval: number, count: number, yrange: { min: number; max: number }): { x: number; y: number; z: number }[] {
        let i = 0;
        const series = [];
        while (i < count) {
            const x = baseval + i * 86400000; // Increment the date by one day (86400000 ms)
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; // Random Y value within the range
            const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15; // Random Z value (bubble size)
            series.push({ x, y, z });
            i++;
        }
        return series;
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
                            name: "Bubble 1",
                            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                                min: 10,
                                max: 60
                            })
                        },
                        {
                            name: "Bubble 2",
                            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                                min: 10,
                                max: 60
                            })
                        },
                        {
                            name: "Bubble 3",
                            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                                min: 10,
                                max: 60
                            })
                        },
                        {
                            name: "Bubble 4",
                            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                                min: 10,
                                max: 60
                            })
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "bubble",
                        toolbar: {
                            show: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        opacity: 0.8
                    },
                    title: {
                        text: undefined
                    },
                    xaxis: {
                        tickAmount: 12,
                        type: "category",
                        axisBorder: {
                            show: false,
                            color: '#e0e0e0'
                        },
                        axisTicks: {
                            show: false,
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
                        max: 70,
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
                    legend: {
                        position: 'bottom',
                        fontSize: "14px",
                        labels: {
                            colors: '#919aa3'
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_bubble_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}