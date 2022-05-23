var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
        color: '#F5FFFE',
        });
    } else {
        highlightLayer.setStyle({
        fillColor: '#F5FFFE',
        fillOpacity: 1
        });
    }
    highlightLayer.openPopup();
}
var map = L.map('map', {
    zoomControl:true, maxZoom:8, minZoom:4.5
}).fitBounds([[-14.138136405350176,95.24277849213587],[9.983811168765945,138.18556579404063]]);
var hash = new L.Hash(map);
// map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
function pop_INDO_PROV_2016_0(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['IDPROV'] !== null ? autolinker.link(feature.properties['IDPROV'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DataST_PROVINSI'] !== null ? autolinker.link(feature.properties['DataST_PROVINSI'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DataST_st'] !== null ? autolinker.link(feature.properties['DataST_st'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_INDO_PROV_2016_0_0(feature) {
    if (feature.properties['DataST_st'] >= 12287.000000 && feature.properties['DataST_st'] <= 157310.400000 ) {
        return {
        pane: 'pane_INDO_PROV_2016_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(110,231,183,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['DataST_st'] >= 157310.400000 && feature.properties['DataST_st'] <= 333387.800000 ) {
        return {
        pane: 'pane_INDO_PROV_2016_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(84,193,152,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['DataST_st'] >= 333387.800000 && feature.properties['DataST_st'] <= 564369.800000 ) {
        return {
        pane: 'pane_INDO_PROV_2016_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(58,155,121,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['DataST_st'] >= 564369.800000 && feature.properties['DataST_st'] <= 850802.000000 ) {
        return {
        pane: 'pane_INDO_PROV_2016_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(32,116,90,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['DataST_st'] >= 850802.000000 && feature.properties['DataST_st'] <= 4978358.000000 ) {
        return {
        pane: 'pane_INDO_PROV_2016_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(6,78,59,1.0)',
        interactive: true,
    }
    }
}
map.createPane('pane_INDO_PROV_2016_0');
map.getPane('pane_INDO_PROV_2016_0').style.zIndex = 400;
map.getPane('pane_INDO_PROV_2016_0').style['mix-blend-mode'] = 'normal';
var layer_INDO_PROV_2016_0 = new L.geoJson(json_INDO_PROV_2016_0, {
    attribution: '',
    interactive: true,
    dataVar: 'json_INDO_PROV_2016_0',
    layerName: 'layer_INDO_PROV_2016_0',
    pane: 'pane_INDO_PROV_2016_0',
    onEachFeature: pop_INDO_PROV_2016_0,
    style: style_INDO_PROV_2016_0_0,
});
bounds_group.addLayer(layer_INDO_PROV_2016_0);
map.addLayer(layer_INDO_PROV_2016_0);
setBounds();