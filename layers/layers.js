ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-180.000000, -90.000000, 180.000000, 86.054954]);
var wms_layers = [];

var format_PostEECOBaseMap_0 = new ol.format.GeoJSON();
var features_PostEECOBaseMap_0 = format_PostEECOBaseMap_0.readFeatures(json_PostEECOBaseMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOBaseMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOBaseMap_0.addFeatures(features_PostEECOBaseMap_0);
var lyr_PostEECOBaseMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOBaseMap_0, 
                style: style_PostEECOBaseMap_0,
                interactive: false,
                title: '<img src="styles/legend/PostEECOBaseMap_0.png" /> Post-EECO Base Map'
            });
var format_PostEECOClimateType_1 = new ol.format.GeoJSON();
var features_PostEECOClimateType_1 = format_PostEECOClimateType_1.readFeatures(json_PostEECOClimateType_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOClimateType_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOClimateType_1.addFeatures(features_PostEECOClimateType_1);
var lyr_PostEECOClimateType_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOClimateType_1, 
                style: style_PostEECOClimateType_1,
                interactive: false,
    title: 'Post-EECO Climate Type<br />\
    <img src="styles/legend/PostEECOClimateType_1_0.png" /> Af<br />\
    <img src="styles/legend/PostEECOClimateType_1_1.png" /> Am<br />\
    <img src="styles/legend/PostEECOClimateType_1_2.png" /> Aw<br />\
    <img src="styles/legend/PostEECOClimateType_1_3.png" /> B<br />\
    <img src="styles/legend/PostEECOClimateType_1_4.png" /> Bs<br />\
    <img src="styles/legend/PostEECOClimateType_1_5.png" /> Bsh<br />\
    <img src="styles/legend/PostEECOClimateType_1_6.png" /> Bsk<br />\
    <img src="styles/legend/PostEECOClimateType_1_7.png" /> Bw<br />\
    <img src="styles/legend/PostEECOClimateType_1_8.png" /> Bwh<br />\
    <img src="styles/legend/PostEECOClimateType_1_9.png" /> Cf<br />\
    <img src="styles/legend/PostEECOClimateType_1_10.png" /> Cfa<br />\
    <img src="styles/legend/PostEECOClimateType_1_11.png" /> Cfb<br />\
    <img src="styles/legend/PostEECOClimateType_1_12.png" /> Cfr<br />\
    <img src="styles/legend/PostEECOClimateType_1_13.png" /> Cm<br />\
    <img src="styles/legend/PostEECOClimateType_1_14.png" /> D<br />\
    <img src="styles/legend/PostEECOClimateType_1_15.png" /> E<br />'
        });
var format_PostEECOSites_2 = new ol.format.GeoJSON();
var features_PostEECOSites_2 = format_PostEECOSites_2.readFeatures(json_PostEECOSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOSites_2.addFeatures(features_PostEECOSites_2);
var lyr_PostEECOSites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOSites_2, 
                style: style_PostEECOSites_2,
                interactive: true,
                title: '<img src="styles/legend/PostEECOSites_2.png" /> Post-EECO Sites'
            });
var format_EECOBaseMap_3 = new ol.format.GeoJSON();
var features_EECOBaseMap_3 = format_EECOBaseMap_3.readFeatures(json_EECOBaseMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOBaseMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOBaseMap_3.addFeatures(features_EECOBaseMap_3);
var lyr_EECOBaseMap_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOBaseMap_3, 
                style: style_EECOBaseMap_3,
                interactive: false,
                title: '<img src="styles/legend/EECOBaseMap_3.png" /> EECO Base Map'
            });
var format_EECOClimateType_4 = new ol.format.GeoJSON();
var features_EECOClimateType_4 = format_EECOClimateType_4.readFeatures(json_EECOClimateType_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOClimateType_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOClimateType_4.addFeatures(features_EECOClimateType_4);
var lyr_EECOClimateType_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOClimateType_4, 
                style: style_EECOClimateType_4,
                interactive: false,
    title: 'EECO Climate Type<br />\
    <img src="styles/legend/EECOClimateType_4_0.png" /> Af<br />\
    <img src="styles/legend/EECOClimateType_4_1.png" /> Am<br />\
    <img src="styles/legend/EECOClimateType_4_2.png" /> Aw<br />\
    <img src="styles/legend/EECOClimateType_4_3.png" /> B<br />\
    <img src="styles/legend/EECOClimateType_4_4.png" /> Bs<br />\
    <img src="styles/legend/EECOClimateType_4_5.png" /> Bsh<br />\
    <img src="styles/legend/EECOClimateType_4_6.png" /> Bsk<br />\
    <img src="styles/legend/EECOClimateType_4_7.png" /> Bw<br />\
    <img src="styles/legend/EECOClimateType_4_8.png" /> Bwh<br />\
    <img src="styles/legend/EECOClimateType_4_9.png" /> Cf<br />\
    <img src="styles/legend/EECOClimateType_4_10.png" /> Cfa<br />\
    <img src="styles/legend/EECOClimateType_4_11.png" /> Cfb<br />\
    <img src="styles/legend/EECOClimateType_4_12.png" /> Cfr<br />\
    <img src="styles/legend/EECOClimateType_4_13.png" /> Cm<br />\
    <img src="styles/legend/EECOClimateType_4_14.png" /> D<br />\
    <img src="styles/legend/EECOClimateType_4_15.png" /> E<br />'
        });
var format_EECOSites_5 = new ol.format.GeoJSON();
var features_EECOSites_5 = format_EECOSites_5.readFeatures(json_EECOSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOSites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOSites_5.addFeatures(features_EECOSites_5);
var lyr_EECOSites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOSites_5, 
                style: style_EECOSites_5,
                interactive: true,
                title: '<img src="styles/legend/EECOSites_5.png" /> EECO Sites'
            });
var format_PostPETMBaseMap_6 = new ol.format.GeoJSON();
var features_PostPETMBaseMap_6 = format_PostPETMBaseMap_6.readFeatures(json_PostPETMBaseMap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMBaseMap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMBaseMap_6.addFeatures(features_PostPETMBaseMap_6);
var lyr_PostPETMBaseMap_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMBaseMap_6, 
                style: style_PostPETMBaseMap_6,
                interactive: false,
                title: '<img src="styles/legend/PostPETMBaseMap_6.png" /> Post-PETM Base Map'
            });
var format_PostPETMClimateType_7 = new ol.format.GeoJSON();
var features_PostPETMClimateType_7 = format_PostPETMClimateType_7.readFeatures(json_PostPETMClimateType_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMClimateType_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMClimateType_7.addFeatures(features_PostPETMClimateType_7);
var lyr_PostPETMClimateType_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMClimateType_7, 
                style: style_PostPETMClimateType_7,
                interactive: false,
    title: 'Post-PETM Climate Type<br />\
    <img src="styles/legend/PostPETMClimateType_7_0.png" /> Af<br />\
    <img src="styles/legend/PostPETMClimateType_7_1.png" /> Am<br />\
    <img src="styles/legend/PostPETMClimateType_7_2.png" /> Aw<br />\
    <img src="styles/legend/PostPETMClimateType_7_3.png" /> B<br />\
    <img src="styles/legend/PostPETMClimateType_7_4.png" /> Bs<br />\
    <img src="styles/legend/PostPETMClimateType_7_5.png" /> Bsh<br />\
    <img src="styles/legend/PostPETMClimateType_7_6.png" /> Bsk<br />\
    <img src="styles/legend/PostPETMClimateType_7_7.png" /> Bw<br />\
    <img src="styles/legend/PostPETMClimateType_7_8.png" /> Bwh<br />\
    <img src="styles/legend/PostPETMClimateType_7_9.png" /> Cf<br />\
    <img src="styles/legend/PostPETMClimateType_7_10.png" /> Cfa<br />\
    <img src="styles/legend/PostPETMClimateType_7_11.png" /> Cfb<br />\
    <img src="styles/legend/PostPETMClimateType_7_12.png" /> Cfr<br />\
    <img src="styles/legend/PostPETMClimateType_7_13.png" /> Cm<br />\
    <img src="styles/legend/PostPETMClimateType_7_14.png" /> D<br />\
    <img src="styles/legend/PostPETMClimateType_7_15.png" /> E<br />'
        });
var format_PostPETMSites_8 = new ol.format.GeoJSON();
var features_PostPETMSites_8 = format_PostPETMSites_8.readFeatures(json_PostPETMSites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMSites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMSites_8.addFeatures(features_PostPETMSites_8);
var lyr_PostPETMSites_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMSites_8, 
                style: style_PostPETMSites_8,
                interactive: true,
                title: '<img src="styles/legend/PostPETMSites_8.png" /> Post-PETM Sites'
            });
var format_PETMBaseMap_9 = new ol.format.GeoJSON();
var features_PETMBaseMap_9 = format_PETMBaseMap_9.readFeatures(json_PETMBaseMap_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMBaseMap_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMBaseMap_9.addFeatures(features_PETMBaseMap_9);
var lyr_PETMBaseMap_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMBaseMap_9, 
                style: style_PETMBaseMap_9,
                interactive: false,
                title: '<img src="styles/legend/PETMBaseMap_9.png" /> PETM Base Map'
            });
var format_PETMClimateType_10 = new ol.format.GeoJSON();
var features_PETMClimateType_10 = format_PETMClimateType_10.readFeatures(json_PETMClimateType_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMClimateType_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMClimateType_10.addFeatures(features_PETMClimateType_10);
var lyr_PETMClimateType_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMClimateType_10, 
                style: style_PETMClimateType_10,
                interactive: false,
    title: 'PETM Climate Type<br />\
    <img src="styles/legend/PETMClimateType_10_0.png" /> Af<br />\
    <img src="styles/legend/PETMClimateType_10_1.png" /> Am<br />\
    <img src="styles/legend/PETMClimateType_10_2.png" /> Aw<br />\
    <img src="styles/legend/PETMClimateType_10_3.png" /> B<br />\
    <img src="styles/legend/PETMClimateType_10_4.png" /> Bs<br />\
    <img src="styles/legend/PETMClimateType_10_5.png" /> Bsh<br />\
    <img src="styles/legend/PETMClimateType_10_6.png" /> Bsk<br />\
    <img src="styles/legend/PETMClimateType_10_7.png" /> Bw<br />\
    <img src="styles/legend/PETMClimateType_10_8.png" /> Bwh<br />\
    <img src="styles/legend/PETMClimateType_10_9.png" /> Cf<br />\
    <img src="styles/legend/PETMClimateType_10_10.png" /> Cfa<br />\
    <img src="styles/legend/PETMClimateType_10_11.png" /> Cfb<br />\
    <img src="styles/legend/PETMClimateType_10_12.png" /> Cfr<br />\
    <img src="styles/legend/PETMClimateType_10_13.png" /> Cm<br />\
    <img src="styles/legend/PETMClimateType_10_14.png" /> D<br />\
    <img src="styles/legend/PETMClimateType_10_15.png" /> E<br />'
        });
var format_PETMSites_11 = new ol.format.GeoJSON();
var features_PETMSites_11 = format_PETMSites_11.readFeatures(json_PETMSites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMSites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMSites_11.addFeatures(features_PETMSites_11);
var lyr_PETMSites_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMSites_11, 
                style: style_PETMSites_11,
                interactive: true,
                title: '<img src="styles/legend/PETMSites_11.png" /> PETM Sites'
            });
var format_LPBaseMap_12 = new ol.format.GeoJSON();
var features_LPBaseMap_12 = format_LPBaseMap_12.readFeatures(json_LPBaseMap_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPBaseMap_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPBaseMap_12.addFeatures(features_LPBaseMap_12);
var lyr_LPBaseMap_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPBaseMap_12, 
                style: style_LPBaseMap_12,
                interactive: false,
                title: '<img src="styles/legend/LPBaseMap_12.png" /> LP Base Map'
            });
var format_LPClimateType_13 = new ol.format.GeoJSON();
var features_LPClimateType_13 = format_LPClimateType_13.readFeatures(json_LPClimateType_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPClimateType_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPClimateType_13.addFeatures(features_LPClimateType_13);
var lyr_LPClimateType_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPClimateType_13, 
                style: style_LPClimateType_13,
                interactive: false,
    title: 'LP Climate Type<br />\
    <img src="styles/legend/LPClimateType_13_0.png" /> Af<br />\
    <img src="styles/legend/LPClimateType_13_1.png" /> Am<br />\
    <img src="styles/legend/LPClimateType_13_2.png" /> Aw<br />\
    <img src="styles/legend/LPClimateType_13_3.png" /> B<br />\
    <img src="styles/legend/LPClimateType_13_4.png" /> Bs<br />\
    <img src="styles/legend/LPClimateType_13_5.png" /> Bsh<br />\
    <img src="styles/legend/LPClimateType_13_6.png" /> Bsk<br />\
    <img src="styles/legend/LPClimateType_13_7.png" /> Bw<br />\
    <img src="styles/legend/LPClimateType_13_8.png" /> Bwh<br />\
    <img src="styles/legend/LPClimateType_13_9.png" /> Cf<br />\
    <img src="styles/legend/LPClimateType_13_10.png" /> Cfa<br />\
    <img src="styles/legend/LPClimateType_13_11.png" /> Cfb<br />\
    <img src="styles/legend/LPClimateType_13_12.png" /> Cfr<br />\
    <img src="styles/legend/LPClimateType_13_13.png" /> Cm<br />\
    <img src="styles/legend/LPClimateType_13_14.png" /> D<br />\
    <img src="styles/legend/LPClimateType_13_15.png" /> E<br />'
        });
var format_LPSites_14 = new ol.format.GeoJSON();
var features_LPSites_14 = format_LPSites_14.readFeatures(json_LPSites_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPSites_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPSites_14.addFeatures(features_LPSites_14);
var lyr_LPSites_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPSites_14, 
                style: style_LPSites_14,
                interactive: true,
                title: '<img src="styles/legend/LPSites_14.png" /> LP Sites'
            });
var format_EPBaseMap_15 = new ol.format.GeoJSON();
var features_EPBaseMap_15 = format_EPBaseMap_15.readFeatures(json_EPBaseMap_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPBaseMap_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPBaseMap_15.addFeatures(features_EPBaseMap_15);
var lyr_EPBaseMap_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPBaseMap_15, 
                style: style_EPBaseMap_15,
                interactive: false,
                title: '<img src="styles/legend/EPBaseMap_15.png" /> EP Base Map'
            });
var format_EPClimateType_16 = new ol.format.GeoJSON();
var features_EPClimateType_16 = format_EPClimateType_16.readFeatures(json_EPClimateType_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPClimateType_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPClimateType_16.addFeatures(features_EPClimateType_16);
var lyr_EPClimateType_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPClimateType_16, 
                style: style_EPClimateType_16,
                interactive: false,
    title: 'EP Climate Type<br />\
    <img src="styles/legend/EPClimateType_16_0.png" /> Af<br />\
    <img src="styles/legend/EPClimateType_16_1.png" /> Am<br />\
    <img src="styles/legend/EPClimateType_16_2.png" /> Aw<br />\
    <img src="styles/legend/EPClimateType_16_3.png" /> B<br />\
    <img src="styles/legend/EPClimateType_16_4.png" /> Bs<br />\
    <img src="styles/legend/EPClimateType_16_5.png" /> Bsh<br />\
    <img src="styles/legend/EPClimateType_16_6.png" /> Bsk<br />\
    <img src="styles/legend/EPClimateType_16_7.png" /> Bw<br />\
    <img src="styles/legend/EPClimateType_16_8.png" /> Bwh<br />\
    <img src="styles/legend/EPClimateType_16_9.png" /> Cf<br />\
    <img src="styles/legend/EPClimateType_16_10.png" /> Cfa<br />\
    <img src="styles/legend/EPClimateType_16_11.png" /> Cfb<br />\
    <img src="styles/legend/EPClimateType_16_12.png" /> Cfr<br />\
    <img src="styles/legend/EPClimateType_16_13.png" /> Cm<br />\
    <img src="styles/legend/EPClimateType_16_14.png" /> D<br />\
    <img src="styles/legend/EPClimateType_16_15.png" /> E<br />'
        });
var format_EPSites_17 = new ol.format.GeoJSON();
var features_EPSites_17 = format_EPSites_17.readFeatures(json_EPSites_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPSites_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPSites_17.addFeatures(features_EPSites_17);
var lyr_EPSites_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPSites_17, 
                style: style_EPSites_17,
                interactive: true,
                title: '<img src="styles/legend/EPSites_17.png" /> EP Sites'
            });

lyr_PostEECOBaseMap_0.setVisible(true);lyr_PostEECOClimateType_1.setVisible(true);lyr_PostEECOSites_2.setVisible(true);lyr_EECOBaseMap_3.setVisible(true);lyr_EECOClimateType_4.setVisible(true);lyr_EECOSites_5.setVisible(true);lyr_PostPETMBaseMap_6.setVisible(true);lyr_PostPETMClimateType_7.setVisible(true);lyr_PostPETMSites_8.setVisible(true);lyr_PETMBaseMap_9.setVisible(true);lyr_PETMClimateType_10.setVisible(true);lyr_PETMSites_11.setVisible(true);lyr_LPBaseMap_12.setVisible(true);lyr_LPClimateType_13.setVisible(true);lyr_LPSites_14.setVisible(true);lyr_EPBaseMap_15.setVisible(true);lyr_EPClimateType_16.setVisible(true);lyr_EPSites_17.setVisible(true);
var layersList = [lyr_PostEECOBaseMap_0,lyr_PostEECOClimateType_1,lyr_PostEECOSites_2,lyr_EECOBaseMap_3,lyr_EECOClimateType_4,lyr_EECOSites_5,lyr_PostPETMBaseMap_6,lyr_PostPETMClimateType_7,lyr_PostPETMSites_8,lyr_PETMBaseMap_9,lyr_PETMClimateType_10,lyr_PETMSites_11,lyr_LPBaseMap_12,lyr_LPClimateType_13,lyr_LPSites_14,lyr_EPBaseMap_15,lyr_EPClimateType_16,lyr_EPSites_17];
lyr_PostEECOBaseMap_0.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostEECOClimateType_1.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_PostEECOSites_2.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', 'Terror': 'Temperature uncertainty (1 SE)', 'Perror': 'Precipitation uncertainty (1 SE)', });
lyr_EECOBaseMap_3.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_EECOClimateType_4.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_EECOSites_5.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', 'Terror': 'Temperature uncertainty (1 SE)', 'Perror': 'Precipitation uncertainty (1 SE)', });
lyr_PostPETMBaseMap_6.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostPETMClimateType_7.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', 'Terror': 'Terror', 'PError': 'PError', });
lyr_PostPETMSites_8.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', 'Terror': 'Temperature uncertainty (1 SE)', 'PError': 'Precipitation uncertainty (1 SE)', });
lyr_PETMBaseMap_9.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'GPGIM_TYPE': 'GPGIM_TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'DESCR': 'DESCR', 'FEATURE_ID': 'FEATURE_ID', 'PLATEID2': 'PLATEID2', 'RECON_METH': 'RECON_METH', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', 'IMPORT_AGE': 'IMPORT_AGE', });
lyr_PETMClimateType_10.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_PETMSites_11.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', 'Terror': 'Temperature uncertainty (1 SE)', 'Perror': 'Precipitation uncertainty (1 SE)', });
lyr_LPBaseMap_12.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_LPClimateType_13.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_LPSites_14.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', 'Perror': 'Precipitation uncertainty (1 SE)', 'Terror': 'Temperature uncertainty (1 SE)', });
lyr_EPBaseMap_15.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_EPClimateType_16.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate ty': 'Climate ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_EPSites_17.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', 'Geochronol': 'Geochronology', 'Notes': 'Notes', 'Terror': 'Temperature uncertainty (1 SE)', 'Perror': 'Precipitation uncertainty (1 SE)', });
lyr_PostEECOBaseMap_0.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostEECOClimateType_1.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PostEECOSites_2.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Terror': 'TextEdit', 'Perror': 'TextEdit', });
lyr_EECOBaseMap_3.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_EECOClimateType_4.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_EECOSites_5.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Terror': 'TextEdit', 'Perror': 'TextEdit', });
lyr_PostPETMBaseMap_6.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostPETMClimateType_7.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Terror': '', 'PError': '', });
lyr_PostPETMSites_8.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Terror': 'TextEdit', 'PError': 'TextEdit', });
lyr_PETMBaseMap_9.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'DESCR': '', 'FEATURE_ID': '', 'PLATEID2': 'Hidden', 'RECON_METH': '', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', 'IMPORT_AGE': '', });
lyr_PETMClimateType_10.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_PETMSites_11.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Terror': 'TextEdit', 'Perror': 'TextEdit', });
lyr_LPBaseMap_12.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_LPClimateType_13.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_LPSites_14.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Perror': 'TextEdit', 'Terror': 'TextEdit', });
lyr_EPBaseMap_15.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_EPClimateType_16.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', });
lyr_EPSites_17.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', 'Geochronol': 'TextEdit', 'Notes': 'TextEdit', 'Terror': 'TextEdit', 'Perror': 'TextEdit', });
lyr_PostEECOBaseMap_0.set('fieldLabels', {});
lyr_PostEECOClimateType_1.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_PostEECOSites_2.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', 'Terror': 'header label', 'Perror': 'header label', });
lyr_EECOBaseMap_3.set('fieldLabels', {});
lyr_EECOClimateType_4.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_EECOSites_5.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', 'Terror': 'header label', 'Perror': 'header label', });
lyr_PostPETMBaseMap_6.set('fieldLabels', {'FILE2': 'no label', });
lyr_PostPETMClimateType_7.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', 'Terror': 'no label', 'PError': 'no label', });
lyr_PostPETMSites_8.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', 'Terror': 'header label', 'PError': 'header label', });
lyr_PETMBaseMap_9.set('fieldLabels', {'FILE2': 'no label', 'DESCR': 'no label', 'FEATURE_ID': 'no label', 'RECON_METH': 'no label', 'IMPORT_AGE': 'no label', });
lyr_PETMClimateType_10.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_PETMSites_11.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', 'Terror': 'header label', 'Perror': 'header label', });
lyr_LPBaseMap_12.set('fieldLabels', {'FILE2': 'no label', });
lyr_LPClimateType_13.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_LPSites_14.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', 'Perror': 'header label', 'Terror': 'header label', });
lyr_EPBaseMap_15.set('fieldLabels', {'FILE2': 'no label', });
lyr_EPClimateType_16.set('fieldLabels', {'Location': 'no label', 'Mean annua': 'no label', 'Temperatur': 'no label', 'Temperat_1': 'no label', 'Mean ann_1': 'no label', 'Precipitat': 'no label', 'Precipit_1': 'no label', 'Climate ty': 'no label', 'Uncertaint': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Precipit_2': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Temperat_2': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_EPSites_17.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', 'Geochronol': 'header label', 'Notes': 'header label', 'Terror': 'header label', 'Perror': 'header label', });
lyr_EPSites_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});