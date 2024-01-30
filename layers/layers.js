ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-180.000000, -90.000000, 180.000000, 90.000000]);
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
var format_PostEECOSmall_1 = new ol.format.GeoJSON();
var features_PostEECOSmall_1 = format_PostEECOSmall_1.readFeatures(json_PostEECOSmall_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOSmall_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOSmall_1.addFeatures(features_PostEECOSmall_1);
var lyr_PostEECOSmall_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOSmall_1, 
                style: style_PostEECOSmall_1,
                interactive: false,
    title: 'Post-EECO Small<br />\
    <img src="styles/legend/PostEECOSmall_1_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/PostEECOSmall_1_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/PostEECOSmall_1_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/PostEECOSmall_1_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/PostEECOSmall_1_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/PostEECOSmall_1_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/PostEECOSmall_1_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/PostEECOSmall_1_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_PostEECOClimateType_2 = new ol.format.GeoJSON();
var features_PostEECOClimateType_2 = format_PostEECOClimateType_2.readFeatures(json_PostEECOClimateType_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOClimateType_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOClimateType_2.addFeatures(features_PostEECOClimateType_2);
var lyr_PostEECOClimateType_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOClimateType_2, 
                style: style_PostEECOClimateType_2,
                interactive: false,
    title: 'Post-EECO Climate Type<br />\
    <img src="styles/legend/PostEECOClimateType_2_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/PostEECOClimateType_2_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/PostEECOClimateType_2_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/PostEECOClimateType_2_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/PostEECOClimateType_2_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/PostEECOClimateType_2_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/PostEECOClimateType_2_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/PostEECOClimateType_2_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_PostEECOSites_3 = new ol.format.GeoJSON();
var features_PostEECOSites_3 = format_PostEECOSites_3.readFeatures(json_PostEECOSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostEECOSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostEECOSites_3.addFeatures(features_PostEECOSites_3);
var lyr_PostEECOSites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostEECOSites_3, 
                style: style_PostEECOSites_3,
                interactive: true,
                title: '<img src="styles/legend/PostEECOSites_3.png" /> Post-EECO Sites'
            });
var format_EECOBaseMap_4 = new ol.format.GeoJSON();
var features_EECOBaseMap_4 = format_EECOBaseMap_4.readFeatures(json_EECOBaseMap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOBaseMap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOBaseMap_4.addFeatures(features_EECOBaseMap_4);
var lyr_EECOBaseMap_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOBaseMap_4, 
                style: style_EECOBaseMap_4,
                interactive: false,
                title: '<img src="styles/legend/EECOBaseMap_4.png" /> EECO Base Map'
            });
var format_EECOSmall_5 = new ol.format.GeoJSON();
var features_EECOSmall_5 = format_EECOSmall_5.readFeatures(json_EECOSmall_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EECOSmall_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EECOSmall_5.addFeatures(features_EECOSmall_5);
var lyr_EECOSmall_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EECOSmall_5, 
                style: style_EECOSmall_5,
                interactive: false,
    title: 'EECO Small<br />\
    <img src="styles/legend/EECOSmall_5_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/EECOSmall_5_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/EECOSmall_5_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/EECOSmall_5_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/EECOSmall_5_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/EECOSmall_5_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/EECOSmall_5_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/EECOSmall_5_7.png" /> Warm ever wet (WEW)<br />'
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
    <img src="styles/legend/EECOClimateType_6_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/EECOClimateType_6_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/EECOClimateType_6_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/EECOClimateType_6_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/EECOClimateType_6_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/EECOClimateType_6_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/EECOClimateType_6_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/EECOClimateType_6_7.png" /> Warm ever wet (WEW)<br />'
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
var format_PostPETMSmall_9 = new ol.format.GeoJSON();
var features_PostPETMSmall_9 = format_PostPETMSmall_9.readFeatures(json_PostPETMSmall_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMSmall_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMSmall_9.addFeatures(features_PostPETMSmall_9);
var lyr_PostPETMSmall_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMSmall_9, 
                style: style_PostPETMSmall_9,
                interactive: false,
    title: 'Post-PETM Small<br />\
    <img src="styles/legend/PostPETMSmall_9_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/PostPETMSmall_9_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/PostPETMSmall_9_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/PostPETMSmall_9_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/PostPETMSmall_9_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/PostPETMSmall_9_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/PostPETMSmall_9_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/PostPETMSmall_9_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_PostPETMClimateType_10 = new ol.format.GeoJSON();
var features_PostPETMClimateType_10 = format_PostPETMClimateType_10.readFeatures(json_PostPETMClimateType_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMClimateType_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMClimateType_10.addFeatures(features_PostPETMClimateType_10);
var lyr_PostPETMClimateType_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMClimateType_10, 
                style: style_PostPETMClimateType_10,
                interactive: false,
    title: 'Post-PETM Climate Type<br />\
    <img src="styles/legend/PostPETMClimateType_10_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/PostPETMClimateType_10_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/PostPETMClimateType_10_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/PostPETMClimateType_10_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/PostPETMClimateType_10_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/PostPETMClimateType_10_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/PostPETMClimateType_10_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/PostPETMClimateType_10_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_PostPETMSites_11 = new ol.format.GeoJSON();
var features_PostPETMSites_11 = format_PostPETMSites_11.readFeatures(json_PostPETMSites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostPETMSites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostPETMSites_11.addFeatures(features_PostPETMSites_11);
var lyr_PostPETMSites_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostPETMSites_11, 
                style: style_PostPETMSites_11,
                interactive: true,
                title: '<img src="styles/legend/PostPETMSites_11.png" /> Post-PETM Sites'
            });
var format_PETMBaseMap_12 = new ol.format.GeoJSON();
var features_PETMBaseMap_12 = format_PETMBaseMap_12.readFeatures(json_PETMBaseMap_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMBaseMap_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMBaseMap_12.addFeatures(features_PETMBaseMap_12);
var lyr_PETMBaseMap_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMBaseMap_12, 
                style: style_PETMBaseMap_12,
                interactive: false,
                title: '<img src="styles/legend/PETMBaseMap_12.png" /> PETM Base Map'
            });
var format_PETMSmall_13 = new ol.format.GeoJSON();
var features_PETMSmall_13 = format_PETMSmall_13.readFeatures(json_PETMSmall_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMSmall_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMSmall_13.addFeatures(features_PETMSmall_13);
var lyr_PETMSmall_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMSmall_13, 
                style: style_PETMSmall_13,
                interactive: false,
    title: 'PETM Small<br />\
    <img src="styles/legend/PETMSmall_13_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/PETMSmall_13_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/PETMSmall_13_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/PETMSmall_13_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/PETMSmall_13_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/PETMSmall_13_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/PETMSmall_13_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/PETMSmall_13_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_PETMClimateType_14 = new ol.format.GeoJSON();
var features_PETMClimateType_14 = format_PETMClimateType_14.readFeatures(json_PETMClimateType_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMClimateType_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMClimateType_14.addFeatures(features_PETMClimateType_14);
var lyr_PETMClimateType_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMClimateType_14, 
                style: style_PETMClimateType_14,
                interactive: false,
    title: 'PETM Climate Type<br />\
    <img src="styles/legend/PETMClimateType_14_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/PETMClimateType_14_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/PETMClimateType_14_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/PETMClimateType_14_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/PETMClimateType_14_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/PETMClimateType_14_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/PETMClimateType_14_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/PETMClimateType_14_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_PETMSites_15 = new ol.format.GeoJSON();
var features_PETMSites_15 = format_PETMSites_15.readFeatures(json_PETMSites_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PETMSites_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETMSites_15.addFeatures(features_PETMSites_15);
var lyr_PETMSites_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETMSites_15, 
                style: style_PETMSites_15,
                interactive: true,
                title: '<img src="styles/legend/PETMSites_15.png" /> PETM Sites'
            });
var format_LPBaseMap_16 = new ol.format.GeoJSON();
var features_LPBaseMap_16 = format_LPBaseMap_16.readFeatures(json_LPBaseMap_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPBaseMap_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPBaseMap_16.addFeatures(features_LPBaseMap_16);
var lyr_LPBaseMap_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPBaseMap_16, 
                style: style_LPBaseMap_16,
                interactive: false,
                title: '<img src="styles/legend/LPBaseMap_16.png" /> LP Base Map'
            });
var format_LPSmall_17 = new ol.format.GeoJSON();
var features_LPSmall_17 = format_LPSmall_17.readFeatures(json_LPSmall_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPSmall_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPSmall_17.addFeatures(features_LPSmall_17);
var lyr_LPSmall_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPSmall_17, 
                style: style_LPSmall_17,
                interactive: false,
    title: 'LP Small<br />\
    <img src="styles/legend/LPSmall_17_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/LPSmall_17_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/LPSmall_17_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/LPSmall_17_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/LPSmall_17_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/LPSmall_17_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/LPSmall_17_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/LPSmall_17_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_LPClimateType_18 = new ol.format.GeoJSON();
var features_LPClimateType_18 = format_LPClimateType_18.readFeatures(json_LPClimateType_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPClimateType_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPClimateType_18.addFeatures(features_LPClimateType_18);
var lyr_LPClimateType_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPClimateType_18, 
                style: style_LPClimateType_18,
                interactive: false,
    title: 'LP Climate Type<br />\
    <img src="styles/legend/LPClimateType_18_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/LPClimateType_18_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/LPClimateType_18_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/LPClimateType_18_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/LPClimateType_18_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/LPClimateType_18_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/LPClimateType_18_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/LPClimateType_18_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_LPSites_19 = new ol.format.GeoJSON();
var features_LPSites_19 = format_LPSites_19.readFeatures(json_LPSites_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LPSites_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPSites_19.addFeatures(features_LPSites_19);
var lyr_LPSites_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LPSites_19, 
                style: style_LPSites_19,
                interactive: true,
                title: '<img src="styles/legend/LPSites_19.png" /> LP Sites'
            });
var format_EPBaseMap_20 = new ol.format.GeoJSON();
var features_EPBaseMap_20 = format_EPBaseMap_20.readFeatures(json_EPBaseMap_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPBaseMap_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPBaseMap_20.addFeatures(features_EPBaseMap_20);
var lyr_EPBaseMap_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPBaseMap_20, 
                style: style_EPBaseMap_20,
                interactive: false,
                title: '<img src="styles/legend/EPBaseMap_20.png" /> EP Base Map'
            });
var format_EPSmall_21 = new ol.format.GeoJSON();
var features_EPSmall_21 = format_EPSmall_21.readFeatures(json_EPSmall_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPSmall_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPSmall_21.addFeatures(features_EPSmall_21);
var lyr_EPSmall_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPSmall_21, 
                style: style_EPSmall_21,
                interactive: false,
    title: 'EP Small<br />\
    <img src="styles/legend/EPSmall_21_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/EPSmall_21_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/EPSmall_21_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/EPSmall_21_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/EPSmall_21_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/EPSmall_21_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/EPSmall_21_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/EPSmall_21_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_EPClimateType_22 = new ol.format.GeoJSON();
var features_EPClimateType_22 = format_EPClimateType_22.readFeatures(json_EPClimateType_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPClimateType_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPClimateType_22.addFeatures(features_EPClimateType_22);
var lyr_EPClimateType_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPClimateType_22, 
                style: style_EPClimateType_22,
                interactive: false,
    title: 'EP Climate Type<br />\
    <img src="styles/legend/EPClimateType_22_0.png" /> Cool and ever-wet (CEW)<br />\
    <img src="styles/legend/EPClimateType_22_1.png" /> Cool temperate (CT)<br />\
    <img src="styles/legend/EPClimateType_22_2.png" /> Humid subtropical (HS)<br />\
    <img src="styles/legend/EPClimateType_22_3.png" /> Arid (WA/CA)<br />\
    <img src="styles/legend/EPClimateType_22_4.png" /> Semi-arid or sub-humid (WS/CS)<br />\
    <img src="styles/legend/EPClimateType_22_5.png" /> Cool monsoonal (CM)<br />\
    <img src="styles/legend/EPClimateType_22_6.png" /> Warm monsoonal (WM)<br />\
    <img src="styles/legend/EPClimateType_22_7.png" /> Warm ever wet (WEW)<br />'
        });
var format_EPSites_23 = new ol.format.GeoJSON();
var features_EPSites_23 = format_EPSites_23.readFeatures(json_EPSites_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EPSites_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPSites_23.addFeatures(features_EPSites_23);
var lyr_EPSites_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPSites_23, 
                style: style_EPSites_23,
                interactive: true,
                title: '<img src="styles/legend/EPSites_23.png" /> EP Sites'
            });
var format_ModernBaseMap_24 = new ol.format.GeoJSON();
var features_ModernBaseMap_24 = format_ModernBaseMap_24.readFeatures(json_ModernBaseMap_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModernBaseMap_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModernBaseMap_24.addFeatures(features_ModernBaseMap_24);
var lyr_ModernBaseMap_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ModernBaseMap_24, 
                style: style_ModernBaseMap_24,
                interactive: false,
                title: '<img src="styles/legend/ModernBaseMap_24.png" /> ModernBaseMap'
            });
var lyr_Worldraster_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "World raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Worldraster_25.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-180.000000, -90.000000, 180.000000, 90.000000]
                            })
                        });
var lyr_Japanrastercorrection_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "Japan raster correction",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Japanrastercorrection_26.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [126.300000, 24.000000, 144.500000, 39.000000]
                            })
                        });

lyr_PostEECOBaseMap_0.setVisible(true);lyr_PostEECOSmall_1.setVisible(true);lyr_PostEECOClimateType_2.setVisible(true);lyr_PostEECOSites_3.setVisible(true);lyr_EECOBaseMap_4.setVisible(true);lyr_EECOSmall_5.setVisible(true);lyr_EECOClimateType_6.setVisible(true);lyr_EECOSites_7.setVisible(true);lyr_PostPETMBaseMap_8.setVisible(true);lyr_PostPETMSmall_9.setVisible(true);lyr_PostPETMClimateType_10.setVisible(true);lyr_PostPETMSites_11.setVisible(true);lyr_PETMBaseMap_12.setVisible(true);lyr_PETMSmall_13.setVisible(true);lyr_PETMClimateType_14.setVisible(true);lyr_PETMSites_15.setVisible(true);lyr_LPBaseMap_16.setVisible(true);lyr_LPSmall_17.setVisible(true);lyr_LPClimateType_18.setVisible(true);lyr_LPSites_19.setVisible(true);lyr_EPBaseMap_20.setVisible(true);lyr_EPSmall_21.setVisible(true);lyr_EPClimateType_22.setVisible(true);lyr_EPSites_23.setVisible(true);lyr_ModernBaseMap_24.setVisible(true);lyr_Worldraster_25.setVisible(true);lyr_Japanrastercorrection_26.setVisible(true);
var layersList = [lyr_PostEECOBaseMap_0,lyr_PostEECOSmall_1,lyr_PostEECOClimateType_2,lyr_PostEECOSites_3,lyr_EECOBaseMap_4,lyr_EECOSmall_5,lyr_EECOClimateType_6,lyr_EECOSites_7,lyr_PostPETMBaseMap_8,lyr_PostPETMSmall_9,lyr_PostPETMClimateType_10,lyr_PostPETMSites_11,lyr_PETMBaseMap_12,lyr_PETMSmall_13,lyr_PETMClimateType_14,lyr_PETMSites_15,lyr_LPBaseMap_16,lyr_LPSmall_17,lyr_LPClimateType_18,lyr_LPSites_19,lyr_EPBaseMap_20,lyr_EPSmall_21,lyr_EPClimateType_22,lyr_EPSites_23,lyr_ModernBaseMap_24,lyr_Worldraster_25,lyr_Japanrastercorrection_26];
lyr_PostEECOBaseMap_0.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostEECOSmall_1.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_PostEECOClimateType_2.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_PostEECOSites_3.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate Ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', });
lyr_EECOBaseMap_4.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_EECOSmall_5.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_EECOClimateType_6.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', });
lyr_EECOSites_7.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate Ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', });
lyr_PostPETMBaseMap_8.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostPETMSmall_9.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_PostPETMClimateType_10.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_PostPETMSites_11.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate Ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', });
lyr_PETMBaseMap_12.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'GPGIM_TYPE': 'GPGIM_TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'DESCR': 'DESCR', 'FEATURE_ID': 'FEATURE_ID', 'PLATEID2': 'PLATEID2', 'RECON_METH': 'RECON_METH', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', 'IMPORT_AGE': 'IMPORT_AGE', });
lyr_PETMSmall_13.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_PETMClimateType_14.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_PETMSites_15.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate Ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', });
lyr_LPBaseMap_16.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_LPSmall_17.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_LPClimateType_18.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', 'Geochronol': 'Geochronol', 'Notes': 'Notes', });
lyr_LPSites_19.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate Ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', });
lyr_EPBaseMap_20.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'FILE2': 'FILE2', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_EPSmall_21.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annua', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Mean ann_1': 'Mean ann_1', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Climate Ty': 'Climate Ty', 'Uncertaint': 'Uncertaint', 'Modern lat': 'Modern lat', 'Modern lon': 'Modern lon', 'Precipit_2': 'Precipit_2', 'Paleolatit': 'Paleolatit', 'Paleolongi': 'Paleolongi', 'Temperat_2': 'Temperat_2', 'Precipit_3': 'Precipit_3', });
lyr_EPClimateType_22.set('fieldAliases', {'Location': 'Location', 'Temperatur': 'Temperatur', 'Temperat_1': 'Temperat_1', 'Proxy': 'Proxy', 'Precipitat': 'Precipitat', 'Precipit_1': 'Precipit_1', 'Proxy_1': 'Proxy_1', 'Climate_Ty': 'Climate_Ty', 'Uncertaint': 'Uncertaint', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Variabilit': 'Variabilit', 'Paleolat': 'Paleolat', 'Paleolong': 'Paleolong', 'Temperat_2': 'Temperat_2', 'Precipit_2': 'Precipit_2', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_EPSites_23.set('fieldAliases', {'Location': 'Location', 'Mean annua': 'Mean annual temperature (°C)', 'Temperatur': 'Temperature seasonality', 'Temperat_1': 'Temperature proxy', 'Mean ann_1': 'Mean annual precipitation (mm/yr)', 'Precipitat': 'Precipitation seasonality', 'Precipit_1': 'Precipitation proxy', 'Climate Ty': 'Climate type', 'Uncertaint': 'Uncertainty', 'Modern lat': 'Modern latitude', 'Modern lon': 'Modern longitude', 'Precipit_2': 'Precipitation intermittency', 'Paleolatit': 'Paleolatitude', 'Paleolongi': 'Paleolongitude', 'Temperat_2': 'Temperature source', 'Precipit_3': 'Precipitation source', });
lyr_ModernBaseMap_24.set('fieldAliases', {'ANCHOR': 'ANCHOR', 'TIME': 'TIME', 'FILE1': 'FILE1', 'RECONFILE1': 'RECONFILE1', 'RECONFILE2': 'RECONFILE2', 'RECONFILE3': 'RECONFILE3', 'PLATEID1': 'PLATEID1', 'TYPE': 'TYPE', 'FROMAGE': 'FROMAGE', 'TOAGE': 'TOAGE', 'NAME': 'NAME', 'PLATEID2': 'PLATEID2', 'GPGIM_TYPE': 'GPGIM_TYPE', 'L_PLATE': 'L_PLATE', 'R_PLATE': 'R_PLATE', 'SPREAD_ASY': 'SPREAD_ASY', });
lyr_PostEECOBaseMap_0.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostEECOSmall_1.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_PostEECOClimateType_2.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_PostEECOSites_3.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate Ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', });
lyr_EECOBaseMap_4.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_EECOSmall_5.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_EECOClimateType_6.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', 'Geochronol': '', });
lyr_EECOSites_7.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate Ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', });
lyr_PostPETMBaseMap_8.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostPETMSmall_9.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_PostPETMClimateType_10.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_PostPETMSites_11.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate Ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', });
lyr_PETMBaseMap_12.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'DESCR': '', 'FEATURE_ID': '', 'PLATEID2': 'Hidden', 'RECON_METH': '', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', 'IMPORT_AGE': '', });
lyr_PETMSmall_13.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_PETMClimateType_14.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_PETMSites_15.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate Ty': '', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', });
lyr_LPBaseMap_16.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_LPSmall_17.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_LPClimateType_18.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', 'Geochronol': '', 'Notes': '', });
lyr_LPSites_19.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate Ty': '', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', });
lyr_EPBaseMap_20.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'FILE2': '', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_EPSmall_21.set('fieldImages', {'Location': 'Hidden', 'Mean annua': 'TextEdit', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Mean ann_1': 'TextEdit', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Climate Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'Hidden', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'Hidden', 'Precipit_3': 'TextEdit', });
lyr_EPClimateType_22.set('fieldImages', {'Location': 'Hidden', 'Temperatur': 'Hidden', 'Temperat_1': 'Hidden', 'Proxy': 'Hidden', 'Precipitat': 'Hidden', 'Precipit_1': 'Hidden', 'Proxy_1': 'Hidden', 'Climate_Ty': 'TextEdit', 'Uncertaint': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Variabilit': 'Hidden', 'Paleolat': 'Hidden', 'Paleolong': 'Hidden', 'Temperat_2': 'Hidden', 'Precipit_2': 'Hidden', 'BUFF_DIST': 'Hidden', 'ORIG_FID': 'Hidden', });
lyr_EPSites_23.set('fieldImages', {'Location': 'TextEdit', 'Mean annua': 'TextEdit', 'Temperatur': 'TextEdit', 'Temperat_1': 'TextEdit', 'Mean ann_1': 'TextEdit', 'Precipitat': 'TextEdit', 'Precipit_1': 'TextEdit', 'Climate Ty': 'TextEdit', 'Uncertaint': 'TextEdit', 'Modern lat': 'TextEdit', 'Modern lon': 'TextEdit', 'Precipit_2': 'TextEdit', 'Paleolatit': 'TextEdit', 'Paleolongi': 'TextEdit', 'Temperat_2': 'TextEdit', 'Precipit_3': 'TextEdit', });
lyr_ModernBaseMap_24.set('fieldImages', {'ANCHOR': 'Hidden', 'TIME': 'Hidden', 'FILE1': 'Hidden', 'RECONFILE1': 'Hidden', 'RECONFILE2': 'Hidden', 'RECONFILE3': 'Hidden', 'PLATEID1': 'Hidden', 'TYPE': 'Hidden', 'FROMAGE': 'Hidden', 'TOAGE': 'Hidden', 'NAME': 'Hidden', 'PLATEID2': 'Hidden', 'GPGIM_TYPE': 'Hidden', 'L_PLATE': 'Hidden', 'R_PLATE': 'Hidden', 'SPREAD_ASY': 'Hidden', });
lyr_PostEECOBaseMap_0.set('fieldLabels', {});
lyr_PostEECOSmall_1.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_PostEECOClimateType_2.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_PostEECOSites_3.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate Ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', });
lyr_EECOBaseMap_4.set('fieldLabels', {});
lyr_EECOSmall_5.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_EECOClimateType_6.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', });
lyr_EECOSites_7.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate Ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', });
lyr_PostPETMBaseMap_8.set('fieldLabels', {'FILE2': 'no label', });
lyr_PostPETMSmall_9.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_PostPETMClimateType_10.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_PostPETMSites_11.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate Ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', });
lyr_PETMBaseMap_12.set('fieldLabels', {'FILE2': 'no label', 'DESCR': 'no label', 'FEATURE_ID': 'no label', 'RECON_METH': 'no label', 'IMPORT_AGE': 'no label', });
lyr_PETMSmall_13.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_PETMClimateType_14.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_PETMSites_15.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate Ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', });
lyr_LPBaseMap_16.set('fieldLabels', {'FILE2': 'no label', });
lyr_LPSmall_17.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_LPClimateType_18.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', 'Geochronol': 'no label', 'Notes': 'no label', });
lyr_LPSites_19.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate Ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', });
lyr_EPBaseMap_20.set('fieldLabels', {'FILE2': 'no label', });
lyr_EPSmall_21.set('fieldLabels', {'Mean annua': 'no label', 'Mean ann_1': 'no label', 'Climate Ty': 'no label', 'Modern lat': 'no label', 'Modern lon': 'no label', 'Paleolatit': 'no label', 'Paleolongi': 'no label', 'Precipit_3': 'no label', });
lyr_EPClimateType_22.set('fieldLabels', {'Climate_Ty': 'no label', });
lyr_EPSites_23.set('fieldLabels', {'Location': 'header label', 'Mean annua': 'header label', 'Temperatur': 'header label', 'Temperat_1': 'header label', 'Mean ann_1': 'header label', 'Precipitat': 'header label', 'Precipit_1': 'header label', 'Climate Ty': 'header label', 'Uncertaint': 'header label', 'Modern lat': 'header label', 'Modern lon': 'header label', 'Precipit_2': 'header label', 'Paleolatit': 'header label', 'Paleolongi': 'header label', 'Temperat_2': 'header label', 'Precipit_3': 'header label', });
lyr_ModernBaseMap_24.set('fieldLabels', {});
lyr_ModernBaseMap_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});