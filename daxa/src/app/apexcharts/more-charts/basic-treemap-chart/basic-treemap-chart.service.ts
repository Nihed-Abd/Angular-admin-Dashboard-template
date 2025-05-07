import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicTreemapChartService {

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
                                    x: "London",
                                    y: 218
                                },
                                {
                                    x: "New York",
                                    y: 149
                                },
                                {
                                    x: "Tokyo",
                                    y: 184
                                },
                                {
                                    x: "Beijing",
                                    y: 55
                                },
                                {
                                    x: "Paris",
                                    y: 84
                                },
                                {
                                    x: "Chicago",
                                    y: 31
                                },
                                {
                                    x: "Osaka",
                                    y: 70
                                },
                                {
                                    x: "İstanbul",
                                    y: 30
                                },
                                {
                                    x: "Bangkok",
                                    y: 44
                                },
                                {
                                    x: "Madrid",
                                    y: 68
                                },
                                {
                                    x: "Barcelona",
                                    y: 28
                                },
                                {
                                    x: "Toronto",
                                    y: 19
                                },
                                {
                                    x: "Shanghai",
                                    y: 29
                                }
                            ]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "treemap",
                        toolbar: {
                            show: true
                        }
                    },
                    title: {
                        text: "Basic Treemap",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_treemap_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}