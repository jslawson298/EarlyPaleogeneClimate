ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-180.000000, -90.000000, 180.000000, 90.000000]);
var wms_layers = [];

var format_ModernBaseMap_0 = new ol.format.GeoJSON();
var features_ModernBaseMap_0 = format_ModernBaseMap_0.readFeatures(json_ModernBaseMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModernBaseMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModernBaseMap_0.addFeatures(features_ModernBaseMap_0);
var lyr_ModernBaseMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ModernBaseMap_0, 
                style: style_ModernBaseMap_0,
                interactive: false,
                title: '<img src="styles/legend/ModernBaseMap_0.png" /> ModernBaseMap'
            });
var lyr_Modernraster_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Modern raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Modernraster_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-180.000000, -90.000000, 180.000000, 90.000000]
                            })
                        });
var format_PostEECOBaseMap_2 = new ol.format.GeoJSON();
var features_PostEECOBaseMap_2 = format_PostEECOBaseMap_2.readFeatures(json_PostEECOBaseMap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOBaseMap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOBaseMap_2.addFeatures(features_PostEECOBaseMap_2);
var lyr_PostEECOBaseMap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOBaseMap_2, 
                style: style_PostEECOBaseMap_2,
                interactive: false,
                title: '<img src="styles/legend/PostEECOBaseMap_2.png" /> Post-EECO Base Map'
            });
var format_PostEECOClimateType_3 = new ol.format.GeoJSON();
var features_PostEECOClimateType_3 = format_PostEECOClimateType_3.readFeatures(json_PostEECOClimateType_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOClimateType_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOClimateType_3.addFeatures(features_PostEECOClimateType_3);
var lyr_PostEECOClimateType_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOClimateType_3, 
                style: style_PostEECOClimateType_3,
                interactive: false,
    title: 'Post-EECO Climate Type<br />\
    <img src="styles/legend/PostEECOClimateType_3_0.png" /> Af<br />\
    <img src="styles/legend/PostEECOClimateType_3_1.png" /> Am<br />\
    <img src="styles/legend/PostEECOClimateType_3_2.png" /> Aw<br />\
    <img src="styles/legend/PostEECOClimateType_3_3.png" /> B<br />\
    <img src="styles/legend/PostEECOClimateType_3_4.png" /> Bs<br />\
    <img src="styles/legend/PostEECOClimateType_3_5.png" /> Bsh<br />\
    <img src="styles/legend/PostEECOClimateType_3_6.png" /> Bsk<br />\
    <img src="styles/legend/PostEECOClimateType_3_7.png" /> Bw<br />\
    <img src="styles/legend/PostEECOClimateType_3_8.png" /> Bwh<br />\
    <img src="styles/legend/PostEECOClimateType_3_9.png" /> Cf<br />\
    <img src="styles/legend/PostEECOClimateType_3_10.png" /> Cfa<br />\
    <img src="styles/legend/PostEECOClimateType_3_11.png" /> Cfb<br />\
    <img src="styles/legend/PostEECOClimateType_3_12.png" /> Cfr<br />\
    <img src="styles/legend/PostEECOClimateType_3_13.png" /> Cm<br />\
    <img src="styles/legend/PostEECOClimateType_3_14.png" /> D<br />\
    <img src="styles/legend/PostEECOClimateType_3_15.png" /> E<br />'
        });
var format_PostEECOSites_4 = new ol.format.GeoJSON();
var features_PostEECOSites_4 = format_PostEECOSites_4.readFeatures(json_PostEECOSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOSites_4.addFeatures(features_PostEECOSites_4);
var lyr_PostEECOSites_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOSites_4, 
                style: style_PostEECOSites_4,
                interactive: true,
                title: '<img src="styles/legend/PostEECOSites_4.png" /> Post-EECO Sites'
            });
var format_EECOBaseMap_5 = new ol.format.GeoJSON();
var features_EECOBaseMap_5 = format_EECOBaseMap_5.readFeatures(json_EECOBaseMap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOBaseMap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOBaseMap_5.addFeatures(features_EECOBaseMap_5);
var lyr_EECOBaseMap_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOBaseMap_5, 
                style: style_EECOBaseMap_5,
                interactive: false,
                title: '<img src="styles/legend/EECOBaseMap_5.png" /> EECO Base Map'
            });
var format_EECOClimateType_6 = new ol.format.GeoJSON();
var features_EECOClimateType_6 = format_EECOClimateType_6.readFeatures(json_EECOClimateType_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOClimateType_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOClimateType_6.addFeatures(features_EECOClimateType_6);
var lyr_EECOClimateType_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOClimateType_6, 
                style: style_EECOClimateType_6,
                interactive: false,
    title: 'EECO Climate Type<br />\
    <img src="styles/legend/EECOClimateType_6_0.png" /> Af<br />\
    <img src="styles/legend/EECOClimateType_6_1.png" /> Am<br />\
    <img src="styles/legend/EECOClimateType_6_2.png" /> Aw<br />\
    <img src="styles/legend/EECOClimateType_6_3.png" /> B<br />\
    <img src="styles/legend/EECOClimateType_6_4.png" /> Bs<br />\
    <img src="styles/legend/EECOClimateType_6_5.png" /> Bsh<br />\
    <img src="styles/legend/EECOClimateType_6_6.png" /> Bsk<br />\
    <img src="styles/legend/EECOClimateType_6_7.png" /> Bw<br />\
    <img src="styles/legend/EECOClimateType_6_8.png" /> Bwh<br />\
    <img src="styles/legend/EECOClimateType_6_9.png" /> Cf<br />\
    <img src="styles/legend/EECOClimateType_6_10.png" /> Cfa<br />\
    <img src="styles/legend/EECOClimateType_6_11.png" /> Cfb<br />\
    <img src="styles/legend/EECOClimateType_6_12.png" /> Cfr<br />\
    <img src="styles/legend/EECOClimateType_6_13.png" /> Cm<br />\
    <img src="styles/legend/EECOClimateType_6_14.png" /> D<br />\
    <img src="styles/legend/EECOClimateType_6_15.png" /> E<br />'
        });
var format_EECOSites_7 = new ol.format.GeoJSON();
var features_EECOSites_7 = format_EECOSites_7.readFeatures(json_EECOSites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOSites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOSites_7.addFeatures(features_EECOSites_7);
var lyr_EECOSites_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOSites_7, 
                style: style_EECOSites_7,
                interactive: true,
                title: '<img src="styles/legend/EECOSites_7.png" /> EECO Sites'
            });
var format_PostPETMBaseMap_8 = new ol.format.GeoJSON();
var features_PostPETMBaseMap_8 = format_PostPETMBaseMap_8.readFeatures(json_PostPETMBaseMap_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMBaseMap_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMBaseMap_8.addFeatures(features_PostPETMBaseMap_8);
var lyr_PostPETMBaseMap_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMBaseMap_8, 
                style: style_PostPETMBaseMap_8,
                interactive: false,
                title: '<img src="styles/legend/PostPETMBaseMap_8.png" /> Post-PETM Base Map'
            });
var format_PostPETMClimateType_9 = new ol.format.GeoJSON();
var features_PostPETMClimateType_9 = format_PostPETMClimateType_9.readFeatures(json_PostPETMClimateType_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMClimateType_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMClimateType_9.addFeatures(features_PostPETMClimateType_9);
var lyr_PostPETMClimateType_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMClimateType_9, 
                style: style_PostPETMClimateType_9,
                interactive: false,
    title: 'Post-PETM Climate Type<br />\
    <img src="styles/legend/PostPETMClimateType_9_0.png" /> Af<br />\
    <img src="styles/legend/PostPETMClimateType_9_1.png" /> Am<br />\
    <img src="styles/legend/PostPETMClimateType_9_2.png" /> Aw<br />\
    <img src="styles/legend/PostPETMClimateType_9_3.png" /> B<br />\
    <img src="styles/legend/PostPETMClimateType_9_4.png" /> Bs<br />\
    <img src="styles/legend/PostPETMClimateType_9_5.png" /> Bsh<br />\
    <img src="styles/legend/PostPETMClimateType_9_6.png" /> Bsk<br />\
    <img src="styles/legend/PostPETMClimateType_9_7.png" /> Bw<br />\
    <img src="styles/legend/PostPETMClimateType_9_8.png" /> Bwh<br />\
    <img src="styles/legend/PostPETMClimateType_9_9.png" /> Cf<br />\
    <img src="styles/legend/PostPETMClimateType_9_10.png" /> Cfa<br />\
    <img src="styles/legend/PostPETMClimateType_9_11.png" /> Cfb<br />\
    <img src="styles/legend/PostPETMClimateType_9_12.png" /> Cfr<br />\
    <img src="styles/legend/PostPETMClimateType_9_13.png" /> Cm<br />\
    <img src="styles/legend/PostPETMClimateType_9_14.png" /> D<br />\
    <img src="styles/legend/PostPETMClimateType_9_15.png" /> E<br />'
        });
var format_PostPETMSites_10 = new ol.format.GeoJSON();
var features_PostPETMSites_10 = format_PostPETMSites_10.readFeatures(json_PostPETMSites_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMSites_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMSites_10.addFeatures(features_PostPETMSites_10);
var lyr_PostPETMSites_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMSites_10, 
                style: style_PostPETMSites_10,
                interactive: true,
                title: '<img src="styles/legend/PostPETMSites_10.png" /> Post-PETM Sites'
            });
var format_PETMBaseMap_11 = new ol.format.GeoJSON();
var features_PETMBaseMap_11 = format_PETMBaseMap_11.readFeatures(json_PETMBaseMap_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMBaseMap_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMBaseMap_11.addFeatures(features_PETMBaseMap_11);
var lyr_PETMBaseMap_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMBaseMap_11, 
                style: style_PETMBaseMap_11,
                interactive: false,
                title: '<img src="styles/legend/PETMBaseMap_11.png" /> PETM Base Map'
            });
var format_PETMClimateType_12 = new ol.format.GeoJSON();
var features_PETMClimateType_12 = format_PETMClimateType_12.readFeatures(json_PETMClimateType_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMClimateType_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMClimateType_12.addFeatures(features_PETMClimateType_12);
var lyr_PETMClimateType_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMClimateType_12, 
                style: style_PETMClimateType_12,
                interactive: false,
    title: 'PETM Climate Type<br />\
    <img src="styles/legend/PETMClimateType_12_0.png" /> Af<br />\
    <img src="styles/legend/PETMClimateType_12_1.png" /> Am<br />\
    <img src="styles/legend/PETMClimateType_12_2.png" /> Aw<br />\
    <img src="styles/legend/PETMClimateType_12_3.png" /> B<br />\
    <img src="styles/legend/PETMClimateType_12_4.png" /> Bs<br />\
    <img src="styles/legend/PETMClimateType_12_5.png" /> Bsh<br />\
    <img src="styles/legend/PETMClimateType_12_6.png" /> Bsk<br />\
    <img src="styles/legend/PETMClimateType_12_7.png" /> Bw<br />\
    <img src="styles/legend/PETMClimateType_12_8.png" /> Bwh<br />\
    <img src="styles/legend/PETMClimateType_12_9.png" /> Cf<br />\
    <img src="styles/legend/PETMClimateType_12_10.png" /> Cfa<br />\
    <img src="styles/legend/PETMClimateType_12_11.png" /> Cfb<br />\
    <img src="styles/legend/PETMClimateType_12_12.png" /> Cfr<br />\
    <img src="styles/legend/PETMClimateType_12_13.png" /> Cm<br />\
    <img src="styles/legend/PETMClimateType_12_14.png" /> D<br />\
    <img src="styles/legend/PETMClimateType_12_15.png" /> E<br />'
        });
var format_PETMSites_13 = new ol.format.GeoJSON();
var features_PETMSites_13 = format_PETMSites_13.readFeatures(json_PETMSites_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMSites_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMSites_13.addFeatures(features_PETMSites_13);
var lyr_PETMSites_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMSites_13, 
                style: style_PETMSites_13,
                interactive: true,
                title: '<img src="styles/legend/PETMSites_13.png" /> PETM Sites'
            });
var format_LPBaseMap_14 = new ol.format.GeoJSON();
var features_LPBaseMap_14 = format_LPBaseMap_14.readFeatures(json_LPBaseMap_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPBaseMap_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPBaseMap_14.addFeatures(features_LPBaseMap_14);
var lyr_LPBaseMap_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPBaseMap_14, 
                style: style_LPBaseMap_14,
                interactive: false,
                title: '<img src="styles/legend/LPBaseMap_14.png" /> LP Base Map'
            });
var format_LPClimateType_15 = new ol.format.GeoJSON();
var features_LPClimateType_15 = format_LPClimateType_15.readFeatures(json_LPClimateType_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPClimateType_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPClimateType_15.addFeatures(features_LPClimateType_15);
var lyr_LPClimateType_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPClimateType_15, 
                style: style_LPClimateType_15,
                interactive: false,
    title: 'LP Climate Type<br />\
    <img src="styles/legend/LPClimateType_15_0.png" /> Af<br />\
    <img src="styles/legend/LPClimateType_15_1.png" /> Am<br />\
    <img src="styles/legend/LPClimateType_15_2.png" /> Aw<br />\
    <img src="styles/legend/LPClimateType_15_3.png" /> B<br />\
    <img src="styles/legend/LPClimateType_15_4.png" /> Bs<br />\
    <img src="styles/legend/LPClimateType_15_5.png" /> Bsh<br />\
    <img src="styles/legend/LPClimateType_15_6.png" /> Bsk<br />\
    <img src="styles/legend/LPClimateType_15_7.png" /> Bw<br />\
    <img src="styles/legend/LPClimateType_15_8.png" /> Bwh<br />\
    <img src="styles/legend/LPClimateType_15_9.png" /> Cf<br />\
    <img src="styles/legend/LPClimateType_15_10.png" /> Cfa<br />\
    <img src="styles/legend/LPClimateType_15_11.png" /> Cfb<br />\
    <img src="styles/legend/LPClimateType_15_12.png" /> Cfr<br />\
    <img src="styles/legend/LPClimateType_15_13.png" /> Cm<br />\
    <img src="styles/legend/LPClimateType_15_14.png" /> D<br />\
    <img src="styles/legend/LPClimateType_15_15.png" /> E<br />'
        });
var format_LPSites_16 = new ol.format.GeoJSON();
var features_LPSites_16 = format_LPSites_16.readFeatures(json_LPSites_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPSites_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPSites_16.addFeatures(features_LPSites_16);
var lyr_LPSites_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPSites_16, 
                style: style_LPSites_16,
                interactive: true,
                title: '<img src="styles/legend/LPSites_16.png" /> LP Sites'
            });
var format_EPBaseMap_17 = new ol.format.GeoJSON();
var features_EPBaseMap_17 = format_EPBaseMap_17.readFeatures(json_EPBaseMap_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPBaseMap_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPBaseMap_17.addFeatures(features_EPBaseMap_17);
var lyr_EPBaseMap_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPBaseMap_17, 
                style: style_EPBaseMap_17,
                interactive: false,
                title: '<img src="styles/legend/EPBaseMap_17.png" /> EP Base Map'
            });
var format_EPClimateType_18 = new ol.format.GeoJSON();
var features_EPClimateType_18 = format_EPClimateType_18.readFeatures(json_EPClimateType_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPClimateType_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPClimateType_18.addFeatures(features_EPClimateType_18);
var lyr_EPClimateType_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPClimateType_18, 
                style: style_EPClimateType_18,
                interactive: false,
    title: 'EP Climate Type<br />\
    <img src="styles/legend/EPClimateType_18_0.png" /> Af<br />\
    <img src="styles/legend/EPClimateType_18_1.png" /> Am<br />\
    <img src="styles/legend/EPClimateType_18_2.png" /> Aw<br />\
    <img src="styles/legend/EPClimateType_18_3.png" /> B<br />\
    <img src="styles/legend/EPClimateType_18_4.png" /> Bs<br />\
    <img src="styles/legend/EPClimateType_18_5.png" /> Bsh<br />\
    <img src="styles/legend/EPClimateType_18_6.png" /> Bsk<br />\
    <img src="styles/legend/EPClimateType_18_7.png" /> Bw<br />\
    <img src="styles/legend/EPClimateType_18_8.png" /> Bwh<br />\
    <img src="styles/legend/EPClimateType_18_9.png" /> Cf<br />\
    <img src="styles/legend/EPClimateType_18_10.png" /> Cfa<br />\
    <img src="styles/legend/EPClimateType_18_11.png" /> Cfb<br />\
    <img src="styles/legend/EPClimateType_18_12.png" /> Cfr<br />\
    <img src="styles/legend/EPClimateType_18_13.png" /> Cm<br />\
    <img src="styles/legend/EPClimateType_18_14.png" /> D<br />\
    <img src="styles/legend/EPClimateType_18_15.png" /> E<br />'
        });
var format_EPSites_19 = new ol.format.GeoJSON();
var features_EPSites_19 = format_EPSites_19.readFeatures(json_EPSites_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPSites_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPSites_19.addFeatures(features_EPSites_19);
var lyr_EPSites_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPSites_19, 
                style: style_EPSites_19,
                interactive: true,
                title: '<img src="styles/legend/EPSites_19.png" /> EP Sites'
            });

lyr_ModernBaseMap_0.setVisible(true);lyr_Modernraster_1.setVisible(true);lyr_PostEECOBaseMap_2.setVisible(true);lyr_PostEECOClimateType_3.setVisible(true);lyr_PostEECOSites_4.setVisible(true);lyr_EECOBaseMap_5.setVisible(true);lyr_EECOClimateType_6.setVisible(true);lyr_EECOSites_7.setVisible(true);lyr_PostPETMBaseMap_8.setVisible(true);lyr_PostPETMClimateType_9.setVisible(true);lyr_PostPETMSites_10.setVisible(true);lyr_PETMBaseMap_11.setVisible(true);lyr_PETMClimateType_12.setVisible(true);lyr_PETMSites_13.setVisible(true);lyr_LPBaseMap_14.setVisible(true);lyr_LPClimateType_15.setVisible(true);lyr_LPSites_16.setVisible(true);lyr_EPBaseMap_17.setVisible(true);lyr_EPClimateType_18.setVisible(true);lyr_EPSites_19.setVisible(true);
var layersList = [lyr_ModernBaseMap_0,lyr_Modernraster_1,lyr_PostEECOBaseMap_2,lyr_PostEECOClimateType_3,lyr_PostEECOSites_4,lyr_EECOBaseMap_5,lyr_EECOClimateType_6,lyr_EECOSites_7,lyr_PostPETMBaseMap_8,lyr_PostPETMClimateType_9,lyr_PostPETMSites_10,lyr_PETMBaseMap_11,lyr_PETMClimateType_12,lyr_PETMSites_13,lyr_LPBaseMap_14,lyr_LPClimateType_15,lyr_LPSites_16,lyr_EPBaseMap_17,lyr_EPClimateType_18,lyr_EPSites_19];
lyr_ModernBaseMap_0.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostEECOBaseMap_2.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostEECOClimateType_3.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_PostEECOSites_4.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_EECOBaseMap_5.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_EECOClimateType_6.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_EECOSites_7.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_PostPETMBaseMap_8.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostPETMClimateType_9.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_PostPETMSites_10.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_PETMBaseMap_11.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'GPGIM_TYPE': 'GPGIM_TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'DESCR': 'DESCR', 'FEATURE_ID': 'FEATURE_ID', 'PLATEID2': 'PLATEID2', 'RECON_METH': 'RECON_METH', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', 'IMPORT_AGE': 'IMPORT_AGE', });
lyr_PETMClimateType_12.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_PETMSites_13.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_LPBaseMap_14.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_LPClimateType_15.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_LPSites_16.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_EPBaseMap_17.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_EPClimateType_18.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_EPSites_19.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_ModernBaseMap_0.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostEECOBaseMap_2.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostEECOClimateType_3.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PostEECOSites_4.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_EECOBaseMap_5.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_EECOClimateType_6.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_EECOSites_7.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PostPETMBaseMap_8.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostPETMClimateType_9.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PostPETMSites_10.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PETMBaseMap_11.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'DESCR': '', 'FEATURE_ID': '', 'PLATEID2': 'Hidden', 'RECON_METH': '', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', 'IMPORT_AGE': '', });
lyr_PETMClimateType_12.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PETMSites_13.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_LPBaseMap_14.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_LPClimateType_15.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_LPSites_16.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_EPBaseMap_17.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_EPClimateType_18.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_EPSites_19.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_ModernBaseMap_0.set('fieldLabels', {});
lyr_PostEECOBaseMap_2.set('fieldLabels', {});
lyr_PostEECOClimateType_3.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_PostEECOSites_4.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_EECOBaseMap_5.set('fieldLabels', {});
lyr_EECOClimateType_6.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_EECOSites_7.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_PostPETMBaseMap_8.set('fieldLabels', {'FILE2': 'no label', });
lyr_PostPETMClimateType_9.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_PostPETMSites_10.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_PETMBaseMap_11.set('fieldLabels', {'FILE2': 'no label', 'DESCR': 'no label', 'FEATURE_ID': 'no label', 'RECON_METH': 'no label', 'IMPORT_AGE': 'no label', });
lyr_PETMClimateType_12.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_PETMSites_13.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_LPBaseMap_14.set('fieldLabels', {'FILE2': 'no label', });
lyr_LPClimateType_15.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_LPSites_16.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_EPBaseMap_17.set('fieldLabels', {'FILE2': 'no label', });
lyr_EPClimateType_18.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_EPSites_19.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_EPSites_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});