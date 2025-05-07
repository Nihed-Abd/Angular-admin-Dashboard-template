import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MonochromePolarChartService {

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
                        42, 39, 35, 29, 26
                    ],
                    chart: {
                        type: 'polarArea'
                    },
                    labels: [
                        'Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'
                    ],
                    fill: {
                        opacity: 1
                    },
                    stroke: {
                        width: 1,
                        colors: undefined
                    },
                    yaxis: {
                        show: false
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
                    },
                    plotOptions: {
                        polarArea: {
                            rings: {
                                strokeWidth: 0
                            }
                        }
                    },
                    theme: {
                        monochrome: {
                            // enabled: true,
                            shadeTo: 'light',
                            shadeIntensity: 0.6
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#polar_monochrome_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}