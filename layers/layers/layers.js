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
var format_DeepMIPPostEECOClimateType_3 = new ol.format.GeoJSON();
var features_DeepMIPPostEECOClimateType_3 = format_DeepMIPPostEECOClimateType_3.readFeatures(json_DeepMIPPostEECOClimateType_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPPostEECOClimateType_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPPostEECOClimateType_3.addFeatures(features_DeepMIPPostEECOClimateType_3);
var lyr_DeepMIPPostEECOClimateType_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPPostEECOClimateType_3, 
                style: style_DeepMIPPostEECOClimateType_3,
                interactive: false,
    title: 'DeepMIP Post-EECO Climate Type<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_0.png" /> Af<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_1.png" /> Am<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_2.png" /> Aw<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_3.png" /> B<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_4.png" /> Bs<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_5.png" /> Bsh<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_6.png" /> Bsk<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_7.png" /> Bw<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_8.png" /> Bwh<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_9.png" /> Cf<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_10.png" /> Cfa<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_11.png" /> Cfb<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_12.png" /> Cfr<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_13.png" /> Cm<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_14.png" /> D<br />\
    <img src="styles/legend/DeepMIPPostEECOClimateType_3_15.png" /> E<br />'
        });
var format_PostEECOClimateType_4 = new ol.format.GeoJSON();
var features_PostEECOClimateType_4 = format_PostEECOClimateType_4.readFeatures(json_PostEECOClimateType_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOClimateType_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOClimateType_4.addFeatures(features_PostEECOClimateType_4);
var lyr_PostEECOClimateType_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOClimateType_4, 
                style: style_PostEECOClimateType_4,
                interactive: false,
    title: 'Post-EECO Climate Type<br />\
    <img src="styles/legend/PostEECOClimateType_4_0.png" /> Af<br />\
    <img src="styles/legend/PostEECOClimateType_4_1.png" /> Am<br />\
    <img src="styles/legend/PostEECOClimateType_4_2.png" /> Aw<br />\
    <img src="styles/legend/PostEECOClimateType_4_3.png" /> B<br />\
    <img src="styles/legend/PostEECOClimateType_4_4.png" /> Bs<br />\
    <img src="styles/legend/PostEECOClimateType_4_5.png" /> Bsh<br />\
    <img src="styles/legend/PostEECOClimateType_4_6.png" /> Bsk<br />\
    <img src="styles/legend/PostEECOClimateType_4_7.png" /> Bw<br />\
    <img src="styles/legend/PostEECOClimateType_4_8.png" /> Bwh<br />\
    <img src="styles/legend/PostEECOClimateType_4_9.png" /> Cf<br />\
    <img src="styles/legend/PostEECOClimateType_4_10.png" /> Cfa<br />\
    <img src="styles/legend/PostEECOClimateType_4_11.png" /> Cfb<br />\
    <img src="styles/legend/PostEECOClimateType_4_12.png" /> Cfr<br />\
    <img src="styles/legend/PostEECOClimateType_4_13.png" /> Cm<br />\
    <img src="styles/legend/PostEECOClimateType_4_14.png" /> D<br />\
    <img src="styles/legend/PostEECOClimateType_4_15.png" /> E<br />'
        });
var format_DeepMIPPostEECOSites_5 = new ol.format.GeoJSON();
var features_DeepMIPPostEECOSites_5 = format_DeepMIPPostEECOSites_5.readFeatures(json_DeepMIPPostEECOSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPPostEECOSites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPPostEECOSites_5.addFeatures(features_DeepMIPPostEECOSites_5);
var lyr_DeepMIPPostEECOSites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPPostEECOSites_5, 
                style: style_DeepMIPPostEECOSites_5,
                interactive: true,
                title: '<img src="styles/legend/DeepMIPPostEECOSites_5.png" /> DeepMIP Post-EECO Sites'
            });
var format_PostEECOSites_6 = new ol.format.GeoJSON();
var features_PostEECOSites_6 = format_PostEECOSites_6.readFeatures(json_PostEECOSites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOSites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOSites_6.addFeatures(features_PostEECOSites_6);
var lyr_PostEECOSites_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOSites_6, 
                style: style_PostEECOSites_6,
                interactive: true,
                title: '<img src="styles/legend/PostEECOSites_6.png" /> Post-EECO Sites'
            });
var format_EECOBaseMap_7 = new ol.format.GeoJSON();
var features_EECOBaseMap_7 = format_EECOBaseMap_7.readFeatures(json_EECOBaseMap_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOBaseMap_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOBaseMap_7.addFeatures(features_EECOBaseMap_7);
var lyr_EECOBaseMap_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOBaseMap_7, 
                style: style_EECOBaseMap_7,
                interactive: false,
                title: '<img src="styles/legend/EECOBaseMap_7.png" /> EECO Base Map'
            });
var format_DeepMIPEECOClimateType_8 = new ol.format.GeoJSON();
var features_DeepMIPEECOClimateType_8 = format_DeepMIPEECOClimateType_8.readFeatures(json_DeepMIPEECOClimateType_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPEECOClimateType_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPEECOClimateType_8.addFeatures(features_DeepMIPEECOClimateType_8);
var lyr_DeepMIPEECOClimateType_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPEECOClimateType_8, 
                style: style_DeepMIPEECOClimateType_8,
                interactive: false,
    title: 'DeepMIP EECO Climate Type<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_0.png" /> Af<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_1.png" /> Am<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_2.png" /> Aw<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_3.png" /> B<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_4.png" /> Bs<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_5.png" /> Bsh<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_6.png" /> Bsk<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_7.png" /> Bw<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_8.png" /> Bwh<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_9.png" /> Cf<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_10.png" /> Cfa<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_11.png" /> Cfb<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_12.png" /> Cfr<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_13.png" /> Cm<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_14.png" /> D<br />\
    <img src="styles/legend/DeepMIPEECOClimateType_8_15.png" /> E<br />'
        });
var format_EECOClimateType_9 = new ol.format.GeoJSON();
var features_EECOClimateType_9 = format_EECOClimateType_9.readFeatures(json_EECOClimateType_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOClimateType_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOClimateType_9.addFeatures(features_EECOClimateType_9);
var lyr_EECOClimateType_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOClimateType_9, 
                style: style_EECOClimateType_9,
                interactive: false,
    title: 'EECO Climate Type<br />\
    <img src="styles/legend/EECOClimateType_9_0.png" /> Af<br />\
    <img src="styles/legend/EECOClimateType_9_1.png" /> Am<br />\
    <img src="styles/legend/EECOClimateType_9_2.png" /> Aw<br />\
    <img src="styles/legend/EECOClimateType_9_3.png" /> B<br />\
    <img src="styles/legend/EECOClimateType_9_4.png" /> Bs<br />\
    <img src="styles/legend/EECOClimateType_9_5.png" /> Bsh<br />\
    <img src="styles/legend/EECOClimateType_9_6.png" /> Bsk<br />\
    <img src="styles/legend/EECOClimateType_9_7.png" /> Bw<br />\
    <img src="styles/legend/EECOClimateType_9_8.png" /> Bwh<br />\
    <img src="styles/legend/EECOClimateType_9_9.png" /> Cf<br />\
    <img src="styles/legend/EECOClimateType_9_10.png" /> Cfa<br />\
    <img src="styles/legend/EECOClimateType_9_11.png" /> Cfb<br />\
    <img src="styles/legend/EECOClimateType_9_12.png" /> Cfr<br />\
    <img src="styles/legend/EECOClimateType_9_13.png" /> Cm<br />\
    <img src="styles/legend/EECOClimateType_9_14.png" /> D<br />\
    <img src="styles/legend/EECOClimateType_9_15.png" /> E<br />'
        });
var format_DeepMIPEECOSites_10 = new ol.format.GeoJSON();
var features_DeepMIPEECOSites_10 = format_DeepMIPEECOSites_10.readFeatures(json_DeepMIPEECOSites_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPEECOSites_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPEECOSites_10.addFeatures(features_DeepMIPEECOSites_10);
var lyr_DeepMIPEECOSites_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPEECOSites_10, 
                style: style_DeepMIPEECOSites_10,
                interactive: true,
                title: '<img src="styles/legend/DeepMIPEECOSites_10.png" /> DeepMIP EECO Sites'
            });
var format_EECOSites_11 = new ol.format.GeoJSON();
var features_EECOSites_11 = format_EECOSites_11.readFeatures(json_EECOSites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOSites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOSites_11.addFeatures(features_EECOSites_11);
var lyr_EECOSites_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOSites_11, 
                style: style_EECOSites_11,
                interactive: true,
                title: '<img src="styles/legend/EECOSites_11.png" /> EECO Sites'
            });
var format_PostPETMBaseMap_12 = new ol.format.GeoJSON();
var features_PostPETMBaseMap_12 = format_PostPETMBaseMap_12.readFeatures(json_PostPETMBaseMap_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMBaseMap_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMBaseMap_12.addFeatures(features_PostPETMBaseMap_12);
var lyr_PostPETMBaseMap_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMBaseMap_12, 
                style: style_PostPETMBaseMap_12,
                interactive: false,
                title: '<img src="styles/legend/PostPETMBaseMap_12.png" /> Post-PETM Base Map'
            });
var format_DeepMIPPostPETMClimateType_13 = new ol.format.GeoJSON();
var features_DeepMIPPostPETMClimateType_13 = format_DeepMIPPostPETMClimateType_13.readFeatures(json_DeepMIPPostPETMClimateType_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPPostPETMClimateType_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPPostPETMClimateType_13.addFeatures(features_DeepMIPPostPETMClimateType_13);
var lyr_DeepMIPPostPETMClimateType_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPPostPETMClimateType_13, 
                style: style_DeepMIPPostPETMClimateType_13,
                interactive: false,
    title: 'DeepMIP Post-PETM Climate Type<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_0.png" /> Af<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_1.png" /> Am<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_2.png" /> Aw<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_3.png" /> B<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_4.png" /> Bs<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_5.png" /> Bsh<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_6.png" /> Bsk<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_7.png" /> Bw<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_8.png" /> Bwh<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_9.png" /> Cf<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_10.png" /> Cfa<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_11.png" /> Cfb<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_12.png" /> Cfr<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_13.png" /> Cm<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_14.png" /> D<br />\
    <img src="styles/legend/DeepMIPPostPETMClimateType_13_15.png" /> E<br />'
        });
var format_PostPETMClimateType_14 = new ol.format.GeoJSON();
var features_PostPETMClimateType_14 = format_PostPETMClimateType_14.readFeatures(json_PostPETMClimateType_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMClimateType_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMClimateType_14.addFeatures(features_PostPETMClimateType_14);
var lyr_PostPETMClimateType_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMClimateType_14, 
                style: style_PostPETMClimateType_14,
                interactive: false,
    title: 'Post-PETM Climate Type<br />\
    <img src="styles/legend/PostPETMClimateType_14_0.png" /> Af<br />\
    <img src="styles/legend/PostPETMClimateType_14_1.png" /> Am<br />\
    <img src="styles/legend/PostPETMClimateType_14_2.png" /> Aw<br />\
    <img src="styles/legend/PostPETMClimateType_14_3.png" /> B<br />\
    <img src="styles/legend/PostPETMClimateType_14_4.png" /> Bs<br />\
    <img src="styles/legend/PostPETMClimateType_14_5.png" /> Bsh<br />\
    <img src="styles/legend/PostPETMClimateType_14_6.png" /> Bsk<br />\
    <img src="styles/legend/PostPETMClimateType_14_7.png" /> Bw<br />\
    <img src="styles/legend/PostPETMClimateType_14_8.png" /> Bwh<br />\
    <img src="styles/legend/PostPETMClimateType_14_9.png" /> Cf<br />\
    <img src="styles/legend/PostPETMClimateType_14_10.png" /> Cfa<br />\
    <img src="styles/legend/PostPETMClimateType_14_11.png" /> Cfb<br />\
    <img src="styles/legend/PostPETMClimateType_14_12.png" /> Cfr<br />\
    <img src="styles/legend/PostPETMClimateType_14_13.png" /> Cm<br />\
    <img src="styles/legend/PostPETMClimateType_14_14.png" /> D<br />\
    <img src="styles/legend/PostPETMClimateType_14_15.png" /> E<br />'
        });
var format_DeepMIPPostPETMSites_15 = new ol.format.GeoJSON();
var features_DeepMIPPostPETMSites_15 = format_DeepMIPPostPETMSites_15.readFeatures(json_DeepMIPPostPETMSites_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPPostPETMSites_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPPostPETMSites_15.addFeatures(features_DeepMIPPostPETMSites_15);
var lyr_DeepMIPPostPETMSites_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPPostPETMSites_15, 
                style: style_DeepMIPPostPETMSites_15,
                interactive: true,
                title: '<img src="styles/legend/DeepMIPPostPETMSites_15.png" /> DeepMIP Post-PETM Sites'
            });
var format_PostPETMSites_16 = new ol.format.GeoJSON();
var features_PostPETMSites_16 = format_PostPETMSites_16.readFeatures(json_PostPETMSites_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMSites_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMSites_16.addFeatures(features_PostPETMSites_16);
var lyr_PostPETMSites_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMSites_16, 
                style: style_PostPETMSites_16,
                interactive: true,
                title: '<img src="styles/legend/PostPETMSites_16.png" /> Post-PETM Sites'
            });
var format_PETMBaseMap_17 = new ol.format.GeoJSON();
var features_PETMBaseMap_17 = format_PETMBaseMap_17.readFeatures(json_PETMBaseMap_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMBaseMap_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMBaseMap_17.addFeatures(features_PETMBaseMap_17);
var lyr_PETMBaseMap_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMBaseMap_17, 
                style: style_PETMBaseMap_17,
                interactive: false,
                title: '<img src="styles/legend/PETMBaseMap_17.png" /> PETM Base Map'
            });
var format_DeepMIPPETMClimateType_18 = new ol.format.GeoJSON();
var features_DeepMIPPETMClimateType_18 = format_DeepMIPPETMClimateType_18.readFeatures(json_DeepMIPPETMClimateType_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPPETMClimateType_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPPETMClimateType_18.addFeatures(features_DeepMIPPETMClimateType_18);
var lyr_DeepMIPPETMClimateType_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPPETMClimateType_18, 
                style: style_DeepMIPPETMClimateType_18,
                interactive: false,
    title: 'DeepMIP PETM Climate Type<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_0.png" /> Af<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_1.png" /> Am<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_2.png" /> Aw<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_3.png" /> B<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_4.png" /> Bs<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_5.png" /> Bsh<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_6.png" /> Bsk<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_7.png" /> Bw<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_8.png" /> Bwh<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_9.png" /> Cf<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_10.png" /> Cfa<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_11.png" /> Cfb<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_12.png" /> Cfr<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_13.png" /> Cm<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_14.png" /> D<br />\
    <img src="styles/legend/DeepMIPPETMClimateType_18_15.png" /> E<br />'
        });
var format_PETMClimateType_19 = new ol.format.GeoJSON();
var features_PETMClimateType_19 = format_PETMClimateType_19.readFeatures(json_PETMClimateType_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMClimateType_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMClimateType_19.addFeatures(features_PETMClimateType_19);
var lyr_PETMClimateType_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMClimateType_19, 
                style: style_PETMClimateType_19,
                interactive: false,
    title: 'PETM Climate Type<br />\
    <img src="styles/legend/PETMClimateType_19_0.png" /> Af<br />\
    <img src="styles/legend/PETMClimateType_19_1.png" /> Am<br />\
    <img src="styles/legend/PETMClimateType_19_2.png" /> Aw<br />\
    <img src="styles/legend/PETMClimateType_19_3.png" /> B<br />\
    <img src="styles/legend/PETMClimateType_19_4.png" /> Bs<br />\
    <img src="styles/legend/PETMClimateType_19_5.png" /> Bsh<br />\
    <img src="styles/legend/PETMClimateType_19_6.png" /> Bsk<br />\
    <img src="styles/legend/PETMClimateType_19_7.png" /> Bw<br />\
    <img src="styles/legend/PETMClimateType_19_8.png" /> Bwh<br />\
    <img src="styles/legend/PETMClimateType_19_9.png" /> Cf<br />\
    <img src="styles/legend/PETMClimateType_19_10.png" /> Cfa<br />\
    <img src="styles/legend/PETMClimateType_19_11.png" /> Cfb<br />\
    <img src="styles/legend/PETMClimateType_19_12.png" /> Cfr<br />\
    <img src="styles/legend/PETMClimateType_19_13.png" /> Cm<br />\
    <img src="styles/legend/PETMClimateType_19_14.png" /> D<br />\
    <img src="styles/legend/PETMClimateType_19_15.png" /> E<br />'
        });
var format_DeepMIPPETMSites_20 = new ol.format.GeoJSON();
var features_DeepMIPPETMSites_20 = format_DeepMIPPETMSites_20.readFeatures(json_DeepMIPPETMSites_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPPETMSites_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPPETMSites_20.addFeatures(features_DeepMIPPETMSites_20);
var lyr_DeepMIPPETMSites_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPPETMSites_20, 
                style: style_DeepMIPPETMSites_20,
                interactive: true,
                title: '<img src="styles/legend/DeepMIPPETMSites_20.png" /> DeepMIP PETM Sites'
            });
var format_PETMSites_21 = new ol.format.GeoJSON();
var features_PETMSites_21 = format_PETMSites_21.readFeatures(json_PETMSites_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMSites_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMSites_21.addFeatures(features_PETMSites_21);
var lyr_PETMSites_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMSites_21, 
                style: style_PETMSites_21,
                interactive: true,
                title: '<img src="styles/legend/PETMSites_21.png" /> PETM Sites'
            });
var format_LPBaseMap_22 = new ol.format.GeoJSON();
var features_LPBaseMap_22 = format_LPBaseMap_22.readFeatures(json_LPBaseMap_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPBaseMap_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPBaseMap_22.addFeatures(features_LPBaseMap_22);
var lyr_LPBaseMap_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPBaseMap_22, 
                style: style_LPBaseMap_22,
                interactive: false,
                title: '<img src="styles/legend/LPBaseMap_22.png" /> LP Base Map'
            });
var format_DeepMIPLPClimateType_23 = new ol.format.GeoJSON();
var features_DeepMIPLPClimateType_23 = format_DeepMIPLPClimateType_23.readFeatures(json_DeepMIPLPClimateType_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPLPClimateType_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPLPClimateType_23.addFeatures(features_DeepMIPLPClimateType_23);
var lyr_DeepMIPLPClimateType_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPLPClimateType_23, 
                style: style_DeepMIPLPClimateType_23,
                interactive: false,
    title: 'DeepMIP LP Climate Type<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_0.png" /> Af<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_1.png" /> Am<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_2.png" /> Aw<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_3.png" /> B<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_4.png" /> Bs<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_5.png" /> Bsh<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_6.png" /> Bsk<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_7.png" /> Bw<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_8.png" /> Bwh<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_9.png" /> Cf<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_10.png" /> Cfa<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_11.png" /> Cfb<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_12.png" /> Cfr<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_13.png" /> Cm<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_14.png" /> D<br />\
    <img src="styles/legend/DeepMIPLPClimateType_23_15.png" /> E<br />'
        });
var format_LPClimateType_24 = new ol.format.GeoJSON();
var features_LPClimateType_24 = format_LPClimateType_24.readFeatures(json_LPClimateType_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPClimateType_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPClimateType_24.addFeatures(features_LPClimateType_24);
var lyr_LPClimateType_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPClimateType_24, 
                style: style_LPClimateType_24,
                interactive: false,
    title: 'LP Climate Type<br />\
    <img src="styles/legend/LPClimateType_24_0.png" /> Af<br />\
    <img src="styles/legend/LPClimateType_24_1.png" /> Am<br />\
    <img src="styles/legend/LPClimateType_24_2.png" /> Aw<br />\
    <img src="styles/legend/LPClimateType_24_3.png" /> B<br />\
    <img src="styles/legend/LPClimateType_24_4.png" /> Bs<br />\
    <img src="styles/legend/LPClimateType_24_5.png" /> Bsh<br />\
    <img src="styles/legend/LPClimateType_24_6.png" /> Bsk<br />\
    <img src="styles/legend/LPClimateType_24_7.png" /> Bw<br />\
    <img src="styles/legend/LPClimateType_24_8.png" /> Bwh<br />\
    <img src="styles/legend/LPClimateType_24_9.png" /> Cf<br />\
    <img src="styles/legend/LPClimateType_24_10.png" /> Cfa<br />\
    <img src="styles/legend/LPClimateType_24_11.png" /> Cfb<br />\
    <img src="styles/legend/LPClimateType_24_12.png" /> Cfr<br />\
    <img src="styles/legend/LPClimateType_24_13.png" /> Cm<br />\
    <img src="styles/legend/LPClimateType_24_14.png" /> D<br />\
    <img src="styles/legend/LPClimateType_24_15.png" /> E<br />'
        });
var format_DeepMIPLPSites_25 = new ol.format.GeoJSON();
var features_DeepMIPLPSites_25 = format_DeepMIPLPSites_25.readFeatures(json_DeepMIPLPSites_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPLPSites_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPLPSites_25.addFeatures(features_DeepMIPLPSites_25);
var lyr_DeepMIPLPSites_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPLPSites_25, 
                style: style_DeepMIPLPSites_25,
                interactive: true,
                title: '<img src="styles/legend/DeepMIPLPSites_25.png" /> DeepMIP LP Sites'
            });
var format_LPSites_26 = new ol.format.GeoJSON();
var features_LPSites_26 = format_LPSites_26.readFeatures(json_LPSites_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPSites_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPSites_26.addFeatures(features_LPSites_26);
var lyr_LPSites_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPSites_26, 
                style: style_LPSites_26,
                interactive: true,
                title: '<img src="styles/legend/LPSites_26.png" /> LP Sites'
            });
var format_EPBaseMap_27 = new ol.format.GeoJSON();
var features_EPBaseMap_27 = format_EPBaseMap_27.readFeatures(json_EPBaseMap_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPBaseMap_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPBaseMap_27.addFeatures(features_EPBaseMap_27);
var lyr_EPBaseMap_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPBaseMap_27, 
                style: style_EPBaseMap_27,
                interactive: false,
                title: '<img src="styles/legend/EPBaseMap_27.png" /> EP Base Map'
            });
var format_DeepMIPEPClimateType_28 = new ol.format.GeoJSON();
var features_DeepMIPEPClimateType_28 = format_DeepMIPEPClimateType_28.readFeatures(json_DeepMIPEPClimateType_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPEPClimateType_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPEPClimateType_28.addFeatures(features_DeepMIPEPClimateType_28);
var lyr_DeepMIPEPClimateType_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPEPClimateType_28, 
                style: style_DeepMIPEPClimateType_28,
                interactive: false,
    title: 'DeepMIP EP Climate Type<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_0.png" /> Af<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_1.png" /> Am<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_2.png" /> Aw<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_3.png" /> B<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_4.png" /> Bs<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_5.png" /> Bsh<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_6.png" /> Bsk<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_7.png" /> Bw<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_8.png" /> Bwh<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_9.png" /> Cf<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_10.png" /> Cfa<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_11.png" /> Cfb<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_12.png" /> Cfr<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_13.png" /> Cm<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_14.png" /> D<br />\
    <img src="styles/legend/DeepMIPEPClimateType_28_15.png" /> E<br />'
        });
var format_EPClimateType_29 = new ol.format.GeoJSON();
var features_EPClimateType_29 = format_EPClimateType_29.readFeatures(json_EPClimateType_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPClimateType_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPClimateType_29.addFeatures(features_EPClimateType_29);
var lyr_EPClimateType_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPClimateType_29, 
                style: style_EPClimateType_29,
                interactive: false,
    title: 'EP Climate Type<br />\
    <img src="styles/legend/EPClimateType_29_0.png" /> Af<br />\
    <img src="styles/legend/EPClimateType_29_1.png" /> Am<br />\
    <img src="styles/legend/EPClimateType_29_2.png" /> Aw<br />\
    <img src="styles/legend/EPClimateType_29_3.png" /> B<br />\
    <img src="styles/legend/EPClimateType_29_4.png" /> Bs<br />\
    <img src="styles/legend/EPClimateType_29_5.png" /> Bsh<br />\
    <img src="styles/legend/EPClimateType_29_6.png" /> Bsk<br />\
    <img src="styles/legend/EPClimateType_29_7.png" /> Bw<br />\
    <img src="styles/legend/EPClimateType_29_8.png" /> Bwh<br />\
    <img src="styles/legend/EPClimateType_29_9.png" /> Cf<br />\
    <img src="styles/legend/EPClimateType_29_10.png" /> Cfa<br />\
    <img src="styles/legend/EPClimateType_29_11.png" /> Cfb<br />\
    <img src="styles/legend/EPClimateType_29_12.png" /> Cfr<br />\
    <img src="styles/legend/EPClimateType_29_13.png" /> Cm<br />\
    <img src="styles/legend/EPClimateType_29_14.png" /> D<br />\
    <img src="styles/legend/EPClimateType_29_15.png" /> E<br />'
        });
var format_DeepMIPEPSites_30 = new ol.format.GeoJSON();
var features_DeepMIPEPSites_30 = format_DeepMIPEPSites_30.readFeatures(json_DeepMIPEPSites_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeepMIPEPSites_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepMIPEPSites_30.addFeatures(features_DeepMIPEPSites_30);
var lyr_DeepMIPEPSites_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeepMIPEPSites_30, 
                style: style_DeepMIPEPSites_30,
                interactive: true,
                title: '<img src="styles/legend/DeepMIPEPSites_30.png" /> DeepMIP EP Sites'
            });
var format_EPSites_31 = new ol.format.GeoJSON();
var features_EPSites_31 = format_EPSites_31.readFeatures(json_EPSites_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPSites_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPSites_31.addFeatures(features_EPSites_31);
var lyr_EPSites_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPSites_31, 
                style: style_EPSites_31,
                interactive: true,
                title: '<img src="styles/legend/EPSites_31.png" /> EP Sites'
            });

lyr_ModernBaseMap_0.setVisible(true);lyr_Modernraster_1.setVisible(true);lyr_PostEECOBaseMap_2.setVisible(false);lyr_DeepMIPPostEECOClimateType_3.setVisible(false);lyr_PostEECOClimateType_4.setVisible(false);lyr_DeepMIPPostEECOSites_5.setVisible(false);lyr_PostEECOSites_6.setVisible(false);lyr_EECOBaseMap_7.setVisible(false);lyr_DeepMIPEECOClimateType_8.setVisible(false);lyr_EECOClimateType_9.setVisible(false);lyr_DeepMIPEECOSites_10.setVisible(false);lyr_EECOSites_11.setVisible(false);lyr_PostPETMBaseMap_12.setVisible(false);lyr_DeepMIPPostPETMClimateType_13.setVisible(false);lyr_PostPETMClimateType_14.setVisible(false);lyr_DeepMIPPostPETMSites_15.setVisible(false);lyr_PostPETMSites_16.setVisible(false);lyr_PETMBaseMap_17.setVisible(false);lyr_DeepMIPPETMClimateType_18.setVisible(false);lyr_PETMClimateType_19.setVisible(false);lyr_DeepMIPPETMSites_20.setVisible(false);lyr_PETMSites_21.setVisible(false);lyr_LPBaseMap_22.setVisible(false);lyr_DeepMIPLPClimateType_23.setVisible(false);lyr_LPClimateType_24.setVisible(false);lyr_DeepMIPLPSites_25.setVisible(false);lyr_LPSites_26.setVisible(false);lyr_EPBaseMap_27.setVisible(false);lyr_DeepMIPEPClimateType_28.setVisible(false);lyr_EPClimateType_29.setVisible(false);lyr_DeepMIPEPSites_30.setVisible(false);lyr_EPSites_31.setVisible(false);
var layersList = [lyr_ModernBaseMap_0,lyr_Modernraster_1,lyr_PostEECOBaseMap_2,lyr_DeepMIPPostEECOClimateType_3,lyr_PostEECOClimateType_4,lyr_DeepMIPPostEECOSites_5,lyr_PostEECOSites_6,lyr_EECOBaseMap_7,lyr_DeepMIPEECOClimateType_8,lyr_EECOClimateType_9,lyr_DeepMIPEECOSites_10,lyr_EECOSites_11,lyr_PostPETMBaseMap_12,lyr_DeepMIPPostPETMClimateType_13,lyr_PostPETMClimateType_14,lyr_DeepMIPPostPETMSites_15,lyr_PostPETMSites_16,lyr_PETMBaseMap_17,lyr_DeepMIPPETMClimateType_18,lyr_PETMClimateType_19,lyr_DeepMIPPETMSites_20,lyr_PETMSites_21,lyr_LPBaseMap_22,lyr_DeepMIPLPClimateType_23,lyr_LPClimateType_24,lyr_DeepMIPLPSites_25,lyr_LPSites_26,lyr_EPBaseMap_27,lyr_DeepMIPEPClimateType_28,lyr_EPClimateType_29,lyr_DeepMIPEPSites_30,lyr_EPSites_31];
lyr_ModernBaseMap_0.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostEECOBaseMap_2.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_DeepMIPPostEECOClimateType_3.set('fieldAliases', {'site_name': 'site_name', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly mi', 'Monthly ma': 'Monthly ma', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer', 'NH Winter': 'NH Winter', 'MPI': 'MPI', 'Climate ty': 'Climate ty', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', });
lyr_PostEECOClimateType_4.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_DeepMIPPostEECOSites_5.set('fieldAliases', {'site_name': 'Location', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr)', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly min precip (mm/day)', 'Monthly ma': 'Monthly max precip (mm/day)', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer (mm)', 'NH Winter': 'NH Winter (mm)', 'MPI': 'MPI', 'Climate ty': 'Climate type', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', });
lyr_PostEECOSites_6.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature uncertainty (1 SE)', 'Temperat_1': 'Temperature seasonality', 'Temperat_2': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation uncertainty (1 SE)', 'Precipit_1': 'Precipitation seasonality', 'Precipit_2': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_3': 'Temperature source', 'Precipit_4': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_EECOBaseMap_7.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_DeepMIPEECOClimateType_8.set('fieldAliases', {'site_name': 'site_name', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly mi', 'Monthly ma': 'Monthly ma', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer', 'NH Winter': 'NH Winter', 'MPI': 'MPI', 'Climate ty': 'Climate ty', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', });
lyr_EECOClimateType_9.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_DeepMIPEECOSites_10.set('fieldAliases', {'site_name': 'Location', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr)', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly min precip (mm/day)', 'Monthly ma': 'Monthly max precip (mm/day)', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer (mm)', 'NH Winter': 'NH Winter (mm)', 'MPI': 'MPI', 'Climate ty': 'Climate type', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', });
lyr_EECOSites_11.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature uncertainty (1 SE)', 'Temperat_1': 'Temperature seasonality', 'Temperat_2': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation uncertainty (1 SE)', 'Precipit_1': 'Precipitation seasonality', 'Precipit_2': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_3': 'Temperature source', 'Precipit_4': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_PostPETMBaseMap_12.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_DeepMIPPostPETMClimateType_13.set('fieldAliases', {'site_name': 'site_name', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly mi', 'Monthly ma': 'Monthly ma', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer', 'NH Winter': 'NH Winter', 'MPI': 'MPI', 'Climate ty': 'Climate ty', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', });
lyr_PostPETMClimateType_14.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Temperat_2': 'Temperat_2', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Precipit_2': 'Precipit_2', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_3': 'Precipit_3', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_3': 'Temperat_3', 'Precipit_4': 'Precipit_4', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_DeepMIPPostPETMSites_15.set('fieldAliases', {'site_name': 'Location', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr)', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly min precip (mm/day)', 'Monthly ma': 'Monthly max precip (mm/day)', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer (mm)', 'NH Winter': 'NH Winter (mm)', 'MPI': 'MPI', 'Climate ty': 'Climate type', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', });
lyr_PostPETMSites_16.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature uncertainty (1 SE)', 'Temperat_1': 'Temperature seasonality', 'Temperat_2': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation uncertainty (1 SE)', 'Precipit_1': 'Precipitation seasonality', 'Precipit_2': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_3': 'Temperature source', 'Precipit_4': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_PETMBaseMap_17.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'GPGIM_TYPE': 'GPGIM_TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'DESCR': 'DESCR', 'FEATURE_ID': 'FEATURE_ID', 'PLATEID2': 'PLATEID2', 'RECON_METH': 'RECON_METH', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', 'IMPORT_AGE': 'IMPORT_AGE', });
lyr_DeepMIPPETMClimateType_18.set('fieldAliases', {'site_name': 'site_name', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly mi', 'Monthly ma': 'Monthly ma', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer', 'NH Winter': 'NH Winter', 'MPI': 'MPI', 'Climate ty': 'Climate ty', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', });
lyr_PETMClimateType_19.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_DeepMIPPETMSites_20.set('fieldAliases', {'site_name': 'Location', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr)', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly min precip (mm/day)', 'Monthly ma': 'Monthly max precip (mm/day)', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer (mm)', 'NH Winter': 'NH Winter (mm)', 'MPI': 'MPI', 'Climate ty': 'Climate type', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', });
lyr_PETMSites_21.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature uncertainty (1 SE)', 'Temperat_1': 'Temperature seasonality', 'Temperat_2': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation uncertainty (1 SE)', 'Precipit_1': 'Precipitation seasonality', 'Precipit_2': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_3': 'Temperature source', 'Precipit_4': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_LPBaseMap_22.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_DeepMIPLPClimateType_23.set('fieldAliases', {'site_name': 'site_name', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly mi', 'Monthly ma': 'Monthly ma', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer', 'NH Winter': 'NH Winter', 'MPI': 'MPI', 'Climate ty': 'Climate ty', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', });
lyr_LPClimateType_24.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Temperat_2': 'Temperat_2', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Precipit_2': 'Precipit_2', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_3': 'Precipit_3', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_3': 'Temperat_3', 'Precipit_4': 'Precipit_4', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_DeepMIPLPSites_25.set('fieldAliases', {'site_name': 'Location', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr)', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly min precip (mm/day)', 'Monthly ma': 'Monthly max precip (mm/day)', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer (mm)', 'NH Winter': 'NH Winter (mm)', 'MPI': 'MPI', 'Climate ty': 'Climate type', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', });
lyr_LPSites_26.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature uncertainty (1 SE)', 'Temperat_1': 'Temperature seasonality', 'Temperat_2': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation uncertainty (1 SE)', 'Precipit_1': 'Precipitation seasonality', 'Precipit_2': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_3': 'Temperature source', 'Precipit_4': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_EPBaseMap_27.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_DeepMIPEPClimateType_28.set('fieldAliases', {'site_name': 'site_name', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly mi', 'Monthly ma': 'Monthly ma', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer', 'NH Winter': 'NH Winter', 'MPI': 'MPI', 'Climate ty': 'Climate ty', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', });
lyr_EPClimateType_29.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_DeepMIPEPSites_30.set('fieldAliases', {'site_name': 'Location', 'model': 'model', 'CO2': 'CO2', 'GMST': 'GMST', 'MAP (mm/yr': 'MAP (mm/yr)', 'MAT (°C)': 'MAT (°C)', 'Monthly mi': 'Monthly min precip (mm/day)', 'Monthly ma': 'Monthly max precip (mm/day)', 'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec', 'NH Summer': 'NH Summer (mm)', 'NH Winter': 'NH Winter (mm)', 'MPI': 'MPI', 'Climate ty': 'Climate type', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', });
lyr_EPSites_31.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature uncertainty (1 SE)', 'Temperat_1': 'Temperature seasonality', 'Temperat_2': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation uncertainty (1 SE)', 'Precipit_1': 'Precipitation seasonality', 'Precipit_2': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_3': 'Temperature source', 'Precipit_4': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', });
lyr_ModernBaseMap_0.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostEECOBaseMap_2.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_DeepMIPPostEECOClimateType_3.set('fieldImages', {'site_name': '', 'model': '', 'CO2': '', 'GMST': '', 'MAP (mm/yr': '', 'MAT (°C)': '', 'Monthly mi': '', 'Monthly ma': '', 'Jan': '', 'Feb': '', 'Mar': '', 'Apr': '', 'May': '', 'Jun': '', 'Jul': '', 'Aug': '', 'Sep': '', 'Oct': '', 'Nov': '', 'Dec': '', 'NH Summer': '', 'NH Winter': '', 'MPI': '', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_PostEECOClimateType_4.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_DeepMIPPostEECOSites_5.set('fieldImages', {'site_name': 'TextEdit', 'model': 'TextEdit', 'CO2': 'TextEdit', 'GMST': 'TextEdit', 'MAP (mm/yr': 'TextEdit', 'MAT (°C)': 'TextEdit', 'Monthly mi': 'TextEdit', 'Monthly ma': 'TextEdit', 'Jan': 'TextEdit', 'Feb': 'TextEdit', 'Mar': 'TextEdit', 'Apr': 'TextEdit', 'May': 'TextEdit', 'Jun': 'TextEdit', 'Jul': 'TextEdit', 'Aug': 'TextEdit', 'Sep': 'TextEdit', 'Oct': 'TextEdit', 'Nov': 'TextEdit', 'Dec': 'TextEdit', 'NH Summer': 'TextEdit', 'NH Winter': 'TextEdit', 'MPI': 'TextEdit', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_PostEECOSites_6.set('fieldImages', {'Location': '', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': '', });
lyr_EECOBaseMap_7.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_DeepMIPEECOClimateType_8.set('fieldImages', {'site_name': '', 'model': '', 'CO2': '', 'GMST': '', 'MAP (mm/yr': '', 'MAT (°C)': '', 'Monthly mi': '', 'Monthly ma': '', 'Jan': '', 'Feb': '', 'Mar': '', 'Apr': '', 'May': '', 'Jun': '', 'Jul': '', 'Aug': '', 'Sep': '', 'Oct': '', 'Nov': '', 'Dec': '', 'NH Summer': '', 'NH Winter': '', 'MPI': '', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_EECOClimateType_9.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_DeepMIPEECOSites_10.set('fieldImages', {'site_name': 'TextEdit', 'model': 'TextEdit', 'CO2': 'TextEdit', 'GMST': 'TextEdit', 'MAP (mm/yr': 'TextEdit', 'MAT (°C)': 'TextEdit', 'Monthly mi': 'TextEdit', 'Monthly ma': 'TextEdit', 'Jan': 'TextEdit', 'Feb': 'TextEdit', 'Mar': 'TextEdit', 'Apr': 'TextEdit', 'May': 'TextEdit', 'Jun': 'TextEdit', 'Jul': 'TextEdit', 'Aug': 'TextEdit', 'Sep': 'TextEdit', 'Oct': 'TextEdit', 'Nov': 'TextEdit', 'Dec': 'TextEdit', 'NH Summer': 'TextEdit', 'NH Winter': 'TextEdit', 'MPI': 'TextEdit', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_EECOSites_11.set('fieldImages', {'Location': '', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': '', });
lyr_PostPETMBaseMap_12.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_DeepMIPPostPETMClimateType_13.set('fieldImages', {'site_name': '', 'model': '', 'CO2': '', 'GMST': '', 'MAP (mm/yr': '', 'MAT (°C)': '', 'Monthly mi': '', 'Monthly ma': '', 'Jan': '', 'Feb': '', 'Mar': '', 'Apr': '', 'May': '', 'Jun': '', 'Jul': '', 'Aug': '', 'Sep': '', 'Oct': '', 'Nov': '', 'Dec': '', 'NH Summer': '', 'NH Winter': '', 'MPI': '', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_PostPETMClimateType_14.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_3': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_DeepMIPPostPETMSites_15.set('fieldImages', {'site_name': 'TextEdit', 'model': 'TextEdit', 'CO2': 'TextEdit', 'GMST': 'TextEdit', 'MAP (mm/yr': 'TextEdit', 'MAT (°C)': 'TextEdit', 'Monthly mi': 'TextEdit', 'Monthly ma': 'TextEdit', 'Jan': 'TextEdit', 'Feb': 'TextEdit', 'Mar': 'TextEdit', 'Apr': 'TextEdit', 'May': 'TextEdit', 'Jun': 'TextEdit', 'Jul': 'TextEdit', 'Aug': 'TextEdit', 'Sep': 'TextEdit', 'Oct': 'TextEdit', 'Nov': 'TextEdit', 'Dec': 'TextEdit', 'NH Summer': 'TextEdit', 'NH Winter': 'TextEdit', 'MPI': 'TextEdit', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_PostPETMSites_16.set('fieldImages', {'Location': '', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': '', });
lyr_PETMBaseMap_17.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'DESCR': '', 'FEATURE_ID': '', 'PLATEID2': 'Hidden', 'RECON_METH': '', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', 'IMPORT_AGE': '', });
lyr_DeepMIPPETMClimateType_18.set('fieldImages', {'site_name': '', 'model': '', 'CO2': '', 'GMST': '', 'MAP (mm/yr': '', 'MAT (°C)': '', 'Monthly mi': '', 'Monthly ma': '', 'Jan': '', 'Feb': '', 'Mar': '', 'Apr': '', 'May': '', 'Jun': '', 'Jul': '', 'Aug': '', 'Sep': '', 'Oct': '', 'Nov': '', 'Dec': '', 'NH Summer': '', 'NH Winter': '', 'MPI': '', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_PETMClimateType_19.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_DeepMIPPETMSites_20.set('fieldImages', {'site_name': 'TextEdit', 'model': 'TextEdit', 'CO2': 'TextEdit', 'GMST': 'TextEdit', 'MAP (mm/yr': 'TextEdit', 'MAT (°C)': 'TextEdit', 'Monthly mi': 'TextEdit', 'Monthly ma': 'TextEdit', 'Jan': 'TextEdit', 'Feb': 'TextEdit', 'Mar': 'TextEdit', 'Apr': 'TextEdit', 'May': 'TextEdit', 'Jun': 'TextEdit', 'Jul': 'TextEdit', 'Aug': 'TextEdit', 'Sep': 'TextEdit', 'Oct': 'TextEdit', 'Nov': 'TextEdit', 'Dec': 'TextEdit', 'NH Summer': 'TextEdit', 'NH Winter': 'TextEdit', 'MPI': 'TextEdit', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_PETMSites_21.set('fieldImages', {'Location': '', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': '', });
lyr_LPBaseMap_22.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_DeepMIPLPClimateType_23.set('fieldImages', {'site_name': '', 'model': '', 'CO2': '', 'GMST': '', 'MAP (mm/yr': '', 'MAT (°C)': '', 'Monthly mi': '', 'Monthly ma': '', 'Jan': '', 'Feb': '', 'Mar': '', 'Apr': '', 'May': '', 'Jun': '', 'Jul': '', 'Aug': '', 'Sep': '', 'Oct': '', 'Nov': '', 'Dec': '', 'NH Summer': '', 'NH Winter': '', 'MPI': '', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_LPClimateType_24.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_3': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': '', 'Precipit_4': '', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_DeepMIPLPSites_25.set('fieldImages', {'site_name': 'TextEdit', 'model': 'TextEdit', 'CO2': 'TextEdit', 'GMST': 'TextEdit', 'MAP (mm/yr': 'TextEdit', 'MAT (°C)': 'TextEdit', 'Monthly mi': 'TextEdit', 'Monthly ma': 'TextEdit', 'Jan': 'TextEdit', 'Feb': 'TextEdit', 'Mar': 'TextEdit', 'Apr': 'TextEdit', 'May': 'TextEdit', 'Jun': 'TextEdit', 'Jul': 'TextEdit', 'Aug': 'TextEdit', 'Sep': 'TextEdit', 'Oct': 'TextEdit', 'Nov': 'TextEdit', 'Dec': 'TextEdit', 'NH Summer': 'TextEdit', 'NH Winter': 'TextEdit', 'MPI': 'TextEdit', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_LPSites_26.set('fieldImages', {'Location': '', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': '', });
lyr_EPBaseMap_27.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_DeepMIPEPClimateType_28.set('fieldImages', {'site_name': '', 'model': '', 'CO2': '', 'GMST': '', 'MAP (mm/yr': '', 'MAT (°C)': '', 'Monthly mi': '', 'Monthly ma': '', 'Jan': '', 'Feb': '', 'Mar': '', 'Apr': '', 'May': '', 'Jun': '', 'Jul': '', 'Aug': '', 'Sep': '', 'Oct': '', 'Nov': '', 'Dec': '', 'NH Summer': '', 'NH Winter': '', 'MPI': '', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_EPClimateType_29.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_DeepMIPEPSites_30.set('fieldImages', {'site_name': 'TextEdit', 'model': 'TextEdit', 'CO2': 'TextEdit', 'GMST': 'TextEdit', 'MAP (mm/yr': 'TextEdit', 'MAT (°C)': 'TextEdit', 'Monthly mi': 'TextEdit', 'Monthly ma': 'TextEdit', 'Jan': 'TextEdit', 'Feb': 'TextEdit', 'Mar': 'TextEdit', 'Apr': 'TextEdit', 'May': 'TextEdit', 'Jun': 'TextEdit', 'Jul': 'TextEdit', 'Aug': 'TextEdit', 'Sep': 'TextEdit', 'Oct': 'TextEdit', 'Nov': 'TextEdit', 'Dec': 'TextEdit', 'NH Summer': 'TextEdit', 'NH Winter': 'TextEdit', 'MPI': 'TextEdit', 'Climate ty': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', });
lyr_EPSites_31.set('fieldImages', {'Location': '', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Temperat_2': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Precipit_2': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_3': 'TextEdit', 'Precipit_4': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': '', });
lyr_ModernBaseMap_0.set('fieldLabels', {});
lyr_PostEECOBaseMap_2.set('fieldLabels', {});
lyr_DeepMIPPostEECOClimateType_3.set('fieldLabels', {'site_name': 'no label', 'model': 'no label', 'CO2': 'no label', 'GMST': 'no label', 'MAP (mm/yr': 'no label', 'MAT (°C)': 'no label', 'Monthly mi': 'no label', 'Monthly ma': 'no label', 'Jan': 'no label', 'Feb': 'no label', 'Mar': 'no label', 'Apr': 'no label', 'May': 'no label', 'Jun': 'no label', 'Jul': 'no label', 'Aug': 'no label', 'Sep': 'no label', 'Oct': 'no label', 'Nov': 'no label', 'Dec': 'no label', 'NH Summer': 'no label', 'NH Winter': 'no label', 'MPI': 'no label', 'Climate ty': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', });
lyr_PostEECOClimateType_4.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_DeepMIPPostEECOSites_5.set('fieldLabels', {'site_name': 'header label', 'model': 'header label', 'CO2': 'header label', 'GMST': 'header label', 'MAP (mm/yr': 'header label', 'MAT (°C)': 'header label', 'Monthly mi': 'header label', 'Monthly ma': 'header label', 'Jan': 'header label', 'Feb': 'header label', 'Mar': 'header label', 'Apr': 'header label', 'May': 'header label', 'Jun': 'header label', 'Jul': 'header label', 'Aug': 'header label', 'Sep': 'header label', 'Oct': 'header label', 'Nov': 'header label', 'Dec': 'header label', 'NH Summer': 'header label', 'NH Winter': 'header label', 'MPI': 'header label', 'Climate ty': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', });
lyr_PostEECOSites_6.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Temperat_2': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Precipit_2': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_3': 'header label', 'Precipit_4': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_EECOBaseMap_7.set('fieldLabels', {});
lyr_DeepMIPEECOClimateType_8.set('fieldLabels', {'site_name': 'no label', 'model': 'no label', 'CO2': 'no label', 'GMST': 'no label', 'MAP (mm/yr': 'no label', 'MAT (°C)': 'no label', 'Monthly mi': 'no label', 'Monthly ma': 'no label', 'Jan': 'no label', 'Feb': 'no label', 'Mar': 'no label', 'Apr': 'no label', 'May': 'no label', 'Jun': 'no label', 'Jul': 'no label', 'Aug': 'no label', 'Sep': 'no label', 'Oct': 'no label', 'Nov': 'no label', 'Dec': 'no label', 'NH Summer': 'no label', 'NH Winter': 'no label', 'MPI': 'no label', 'Climate ty': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', });
lyr_EECOClimateType_9.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_DeepMIPEECOSites_10.set('fieldLabels', {'site_name': 'header label', 'model': 'header label', 'CO2': 'header label', 'GMST': 'header label', 'MAP (mm/yr': 'header label', 'MAT (°C)': 'header label', 'Monthly mi': 'header label', 'Monthly ma': 'header label', 'Jan': 'header label', 'Feb': 'header label', 'Mar': 'header label', 'Apr': 'header label', 'May': 'header label', 'Jun': 'header label', 'Jul': 'header label', 'Aug': 'header label', 'Sep': 'header label', 'Oct': 'header label', 'Nov': 'header label', 'Dec': 'header label', 'NH Summer': 'header label', 'NH Winter': 'header label', 'MPI': 'header label', 'Climate ty': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', });
lyr_EECOSites_11.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Temperat_2': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Precipit_2': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_3': 'header label', 'Precipit_4': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_PostPETMBaseMap_12.set('fieldLabels', {'FILE2': 'no label', });
lyr_DeepMIPPostPETMClimateType_13.set('fieldLabels', {'site_name': 'no label', 'model': 'no label', 'CO2': 'no label', 'GMST': 'no label', 'MAP (mm/yr': 'no label', 'MAT (°C)': 'no label', 'Monthly mi': 'no label', 'Monthly ma': 'no label', 'Jan': 'no label', 'Feb': 'no label', 'Mar': 'no label', 'Apr': 'no label', 'May': 'no label', 'Jun': 'no label', 'Jul': 'no label', 'Aug': 'no label', 'Sep': 'no label', 'Oct': 'no label', 'Nov': 'no label', 'Dec': 'no label', 'NH Summer': 'no label', 'NH Winter': 'no label', 'MPI': 'no label', 'Climate ty': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', });
lyr_PostPETMClimateType_14.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Temperat_2': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Precipit_2': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_3': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_3': 'no label', 'Precipit_4': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_DeepMIPPostPETMSites_15.set('fieldLabels', {'site_name': 'header label', 'model': 'header label', 'CO2': 'header label', 'GMST': 'header label', 'MAP (mm/yr': 'header label', 'MAT (°C)': 'header label', 'Monthly mi': 'header label', 'Monthly ma': 'header label', 'Jan': 'header label', 'Feb': 'header label', 'Mar': 'header label', 'Apr': 'header label', 'May': 'header label', 'Jun': 'header label', 'Jul': 'header label', 'Aug': 'header label', 'Sep': 'header label', 'Oct': 'header label', 'Nov': 'header label', 'Dec': 'header label', 'NH Summer': 'header label', 'NH Winter': 'header label', 'MPI': 'header label', 'Climate ty': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', });
lyr_PostPETMSites_16.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Temperat_2': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Precipit_2': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_3': 'header label', 'Precipit_4': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_PETMBaseMap_17.set('fieldLabels', {'FILE2': 'no label', 'DESCR': 'no label', 'FEATURE_ID': 'no label', 'RECON_METH': 'no label', 'IMPORT_AGE': 'no label', });
lyr_DeepMIPPETMClimateType_18.set('fieldLabels', {'site_name': 'no label', 'model': 'no label', 'CO2': 'no label', 'GMST': 'no label', 'MAP (mm/yr': 'no label', 'MAT (°C)': 'no label', 'Monthly mi': 'no label', 'Monthly ma': 'no label', 'Jan': 'no label', 'Feb': 'no label', 'Mar': 'no label', 'Apr': 'no label', 'May': 'no label', 'Jun': 'no label', 'Jul': 'no label', 'Aug': 'no label', 'Sep': 'no label', 'Oct': 'no label', 'Nov': 'no label', 'Dec': 'no label', 'NH Summer': 'no label', 'NH Winter': 'no label', 'MPI': 'no label', 'Climate ty': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', });
lyr_PETMClimateType_19.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_DeepMIPPETMSites_20.set('fieldLabels', {'site_name': 'header label', 'model': 'header label', 'CO2': 'header label', 'GMST': 'header label', 'MAP (mm/yr': 'header label', 'MAT (°C)': 'header label', 'Monthly mi': 'header label', 'Monthly ma': 'header label', 'Jan': 'header label', 'Feb': 'header label', 'Mar': 'header label', 'Apr': 'header label', 'May': 'header label', 'Jun': 'header label', 'Jul': 'header label', 'Aug': 'header label', 'Sep': 'header label', 'Oct': 'header label', 'Nov': 'header label', 'Dec': 'header label', 'NH Summer': 'header label', 'NH Winter': 'header label', 'MPI': 'header label', 'Climate ty': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', });
lyr_PETMSites_21.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Temperat_2': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Precipit_2': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_3': 'header label', 'Precipit_4': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_LPBaseMap_22.set('fieldLabels', {'FILE2': 'no label', });
lyr_DeepMIPLPClimateType_23.set('fieldLabels', {'site_name': 'no label', 'model': 'no label', 'CO2': 'no label', 'GMST': 'no label', 'MAP (mm/yr': 'no label', 'MAT (°C)': 'no label', 'Monthly mi': 'no label', 'Monthly ma': 'no label', 'Jan': 'no label', 'Feb': 'no label', 'Mar': 'no label', 'Apr': 'no label', 'May': 'no label', 'Jun': 'no label', 'Jul': 'no label', 'Aug': 'no label', 'Sep': 'no label', 'Oct': 'no label', 'Nov': 'no label', 'Dec': 'no label', 'NH Summer': 'no label', 'NH Winter': 'no label', 'MPI': 'no label', 'Climate ty': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', });
lyr_LPClimateType_24.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Temperat_2': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Precipit_2': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_3': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_3': 'no label', 'Precipit_4': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_DeepMIPLPSites_25.set('fieldLabels', {'site_name': 'header label', 'model': 'header label', 'CO2': 'header label', 'GMST': 'header label', 'MAP (mm/yr': 'header label', 'MAT (°C)': 'header label', 'Monthly mi': 'header label', 'Monthly ma': 'header label', 'Jan': 'header label', 'Feb': 'header label', 'Mar': 'header label', 'Apr': 'header label', 'May': 'header label', 'Jun': 'header label', 'Jul': 'header label', 'Aug': 'header label', 'Sep': 'header label', 'Oct': 'header label', 'Nov': 'header label', 'Dec': 'header label', 'NH Summer': 'header label', 'NH Winter': 'header label', 'MPI': 'header label', 'Climate ty': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', });
lyr_LPSites_26.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Temperat_2': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Precipit_2': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_3': 'header label', 'Precipit_4': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_EPBaseMap_27.set('fieldLabels', {'FILE2': 'no label', });
lyr_DeepMIPEPClimateType_28.set('fieldLabels', {'site_name': 'no label', 'model': 'no label', 'CO2': 'no label', 'GMST': 'no label', 'MAP (mm/yr': 'no label', 'MAT (°C)': 'no label', 'Monthly mi': 'no label', 'Monthly ma': 'no label', 'Jan': 'no label', 'Feb': 'no label', 'Mar': 'no label', 'Apr': 'no label', 'May': 'no label', 'Jun': 'no label', 'Jul': 'no label', 'Aug': 'no label', 'Sep': 'no label', 'Oct': 'no label', 'Nov': 'no label', 'Dec': 'no label', 'NH Summer': 'no label', 'NH Winter': 'no label', 'MPI': 'no label', 'Climate ty': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', });
lyr_EPClimateType_29.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_DeepMIPEPSites_30.set('fieldLabels', {'site_name': 'header label', 'model': 'header label', 'CO2': 'header label', 'GMST': 'header label', 'MAP (mm/yr': 'header label', 'MAT (°C)': 'header label', 'Monthly mi': 'header label', 'Monthly ma': 'header label', 'Jan': 'header label', 'Feb': 'header label', 'Mar': 'header label', 'Apr': 'header label', 'May': 'header label', 'Jun': 'header label', 'Jul': 'header label', 'Aug': 'header label', 'Sep': 'header label', 'Oct': 'header label', 'Nov': 'header label', 'Dec': 'header label', 'NH Summer': 'header label', 'NH Winter': 'header label', 'MPI': 'header label', 'Climate ty': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', });
lyr_EPSites_31.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Temperat_2': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Precipit_2': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_3': 'header label', 'Precipit_4': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', });
lyr_EPSites_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});