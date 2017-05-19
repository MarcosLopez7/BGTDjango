/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .factory('portaFactory', function () {
            return {
                data: function () {
                    var areas = [
                        {
                            'id': 1,
                            'title': 'Redes de Comunicación',
                            'img': '/static/img/icons/redes.png',
                            'list': [
                                'Soluciones con OPC específicos',
                                'Configuración de redes WAN',
                                'Configuración de redes LAN',
                                'Seguridad en redes'
                            ],
                            'area': [
                                '/static/img/area/redes/ConexionLAN.jpg',
                                '/static/img/area/redes/ConexionWAN.jpg',
                                '/static/img/area/redes/opc.jpeg',
                                '/static/img/area/redes/Security.gif'
                            ]
                        },
                        {
                            'id': 2,
                            'title': 'Desarrollo Web',
                            'img': '/static/img/icons/web.png',
                            'list': [
                                'Sistemas Web (WebApps)',
                                'Landing Page',
                                'Ecommerce',
                                'Blogs'
                            ],
                            'area': [
                                '/static/img/area/web/Code.jpg',
                                '/static/img/area/web/Database.jpg',
                                '/static/img/area/web/ecommerce.png'
                            ]
                        },
                        {
                            'id': 3,
                            'title': 'Desarrollo Móvil',
                            'img': '/static/img/icons/mobile.png',
                            'list': [
                                'Android',
                                'iOS',
                                'Aplicaciones Híbridas'
                            ],
                            'area': [
                                '/static/img/area/movil/Android.jpg',
                                '/static/img/area/movil/Ionic_Logo.png',
                                '/static/img/area/movil/IOS.jpg'
                            ]
                        },
                        {
                            'id': 4,
                            'title': 'Ingeniería de Software',
                            'img': '/static/img/icons/enge.png',
                            'list': [
                                'Gestión de Proyectos de desarrollo de Software',
                                'Calidad y Pruebas de Software',
                                'Ciclo de vida del software',
                                'Mantenimiento del Software'
                            ],
                            'area': [
                                '/static/img/area/soft/Code.jpg',
                                '/static/img/area/soft/Productivity.jpg',
                                '/static/img/area/soft/cycle.jpg'
                            ]
                        },
                        {
                            'id': 5,
                            'title': 'Dirección y Gestión de Proyectos',
                            'img': '/static/img/icons/pm.png',
                            'list': [
                                'Planificación',
                                'Organización',
                                'Seguimiento',
                                'Control'
                            ],
                            'area': [
                                '/static/img/area/pm/Graph.jpg',
                                '/static/img/area/pm/Postit.jpg',
                                '/static/img/area/pm/project.jpg'
                            ]
                        },
                        {
                            'id': 6,
                            'title': 'Drones y Gadgets',
                            'img': '/static/img/icons/dron.png',
                            'list': [
                                'Supervisión',
                                'Fumigación',
                                'Mapeo',
                                'Diseño y Construcción de Drones'
                            ],
                            'area': [
                                '/static/img/area/drones/detec.jpg',
                                '/static/img/area/drones/DIY.jpg',
                                '/static/img/area/drones/DronGas.png',
                                '/static/img/area/drones/Imagenes.jpg'
                            ]
                        },
                        {
                            'id': 7,
                            'title': 'Robótica',
                            'img': '/static/img/icons/robot.png',
                            'list': [
                                'Construcción de mini-sumos',
                                'Construcción de radio control',
                                'Desarrollo de soluciones con robots',
                                'Construcción de máquinas'
                            ],
                            'area': [
                                '/static/img/area/robot/Brazo.jpg',
                                '/static/img/area/robot/Detector.jpg',
                                '/static/img/area/robot/Seguidor.jpg'
                            ]
                        },
                        {
                            'id': 8,
                            'title': 'Manufactura y Prototipado',
                            'img': '/static/img/icons/3d.png',
                            'list': [
                                'Impresión 3D',
                                'Prototipado de Escaneo 3D',
                                'Diseño Asistido por Computadora (CAD)',
                                'Ingeniería Asistida por Computadora (CAE)',
                                'Manufactura Asistida por Computadora (CAM)'
                            ],
                            'area': [
                                '/static/img/area/manu/CAE.jpg',
                                '/static/img/area/robot/Impresion.jpg',
                                '/static/img/area/robot/Solid.png'
                            ]
                        },
                        {
                            'id': 9,
                            'title': 'Automatización y Control',
                            'img': '/static/img/icons/control.png',
                            'list': [
                                'Automatización con PLC',
                                'Automatización con FPGA',
                                'Soluciones con Internet de las Cosas (IoT)'
                            ],
                            'area': [
                                '/static/img/area/auto/AutoTech.jpg',
                                '/static/img/area/auto/Labview.png',
                                '/static/img/area/auto/PLC.jpg'
                            ]
                        },
                        {
                            'id': 10,
                            'title': 'Energía y Sustentabilidad',
                            'img': '/static/img/icons/energy.png',
                            'list': [
                                'Soluciones de Generación',
                                'Soluciones de Ahorro',
                                'Desarrollo Sustentable'
                            ],
                            'area': [
                                '/static/img/area/energia/panel.jpg',
                                '/static/img/area/energia/SolarWH.jpg',
                                '/static/img/area/energia/Turbine.jpg'
                            ]
                        },
                        {
                            'id': 11,
                            'title': 'Domótica',
                            'img': '/static/img/icons/home.png',
                            'list': [
                                'Supervisión y Seguridad',
                                'Configuración de Red Interna',
                                'Soluciones de Automatización en el Hogar',
                                'Aplicaciones Móviles de Control para el Hogar',
                                'Energía Sustentable'
                            ],
                            'area': [
                                '/static/img/area/domotica/AutoHouse.png',
                                '/static/img/area/domotica/Casa.jpg',
                                '/static/img/area/domotica/homelynx.jpg'
                            ]
                        },
                        {
                            'id': 12,
                            'title': 'Desarrollo de Proyectos',
                            'img': '/static/img/icons/inge.png',
                            'list': [
                                'Prototipado y Pruebas de Concepto',
                                'Soluciones Personalizadas',
                                'Sistemas de Entretenimiento',
                                'Venta de Ideas (Plan de Negocios)'
                            ],
                            'area': [
                                '/static/img/area/project/AR.jpg',
                                '/static/img/area/project/iotd.jpg',
                                '/static/img/area/project/iots.jpg'
                            ]
                        }
                    ];

                    return areas;
                },
                area: function (i) {
                    return areas[i];
                }
            }
        })
})();