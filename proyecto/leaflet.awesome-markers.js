/*
  Leaflet.AwesomeMarkers, a plugin that adds colorful iconic markers for Leaflet, based on the Font Awesome icons
  (c) 2012-2013, Lennard Voogdt

  http://leafletjs.com
  https://github.com/lvoogdt
*/
(function (window, document, undefined) {
/*
 * Leaflet.AwesomeMarkers assumes that you have already included the Leaflet library.
 */

L.AwesomeMarkers = {};
iconName = "awesome-marker";

L.AwesomeMarkers.version = '1.0';

L.AwesomeMarkers.Icon = L.Icon.extend({
  options: {
    iconSize: [35, 45], 
    iconAnchor:   [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    icon: 'home',
    color: 'blue',
    iconColor: 'white'
  },

  initialize: function (options) {
    //alert(options.icon);
    options = L.setOptions(this, options);
    
    if (options.icon == "escuela") {
      options.icon = "";
      iconName = "awesome-markerEscuela";
      options.className = "awesome-markerEscuela";
    };
    if (options.icon == "ferreteria") {
      options.icon = "";
      iconName = "awesome-markerFerreteria";
      options.className = "awesome-markerFerreteria";
    };
    if (options.icon == "hidrante") {
      options.icon = "";
      iconName = "awesome-markerHidrante";
      options.className = "awesome-markerHidrante";
    };
    if (options.icon == "panaderia") {
      options.icon = "";
      iconName = "awesome-markerPanaderia";
      options.className = "awesome-markerPanaderia";
    };
    if (options.icon == "parada") {
      options.icon = "";
      iconName = "awesome-markerParada";
      options.className = "awesome-markerParada";
    };
    if (options.icon == "semafaro") {
      options.icon = "";
      iconName = "awesome-markerSemafaro";
      options.className = "awesome-markerSemafaro";
    };
    if (options.icon == "puente") {
      options.icon = "";
      iconName = "awesome-markerPuentes";
      options.className = "awesome-markerPuentes";
    };

    if (options.icon == "banco") {
      options.icon = "";
      iconName = "awesome-markerBanco";
      options.className = "awesome-markerBanco";
    };
    if (options.icon == "ciclo") {
      options.icon = "";
      iconName = "awesome-markerCiclo";
      options.className = "awesome-markerCiclo";
    };
    if (options.icon == "confiteria") {
      options.icon = "";
      iconName = "awesome-markerConfiteria";
      options.className = "awesome-markerConfiteria";
    };
    if (options.icon == "electrodomesticos") {
      options.icon = "";
      iconName = "awesome-markerElectrodomesticos";
      options.className = "awesome-markerElectrodomesticos";
    };
    if (options.icon == "heladeria") {
      options.icon = "";
      iconName = "awesome-markerHeladeria";
      options.className = "awesome-markerHeladeria";
    };
    if (options.icon == "iglesia") {
      options.icon = "";
      iconName = "awesome-markerIglesia";
      options.className = "awesome-markerIglesia";
    };
    if (options.icon == "repuestos") {
      options.icon = "";
      iconName = "awesome-markerRepuestos";
      options.className = "awesome-markerRepuestos";
    };
    if (options.icon == "talabarteria") {
      options.icon = "";
      iconName = "awesome-markerTalabarteria";
      options.className = "awesome-markerTalabarteria";
    };
    if (options.icon == "tienda") {
      options.icon = "";
      iconName = "awesome-markerTienda";
      options.className = "awesome-markerTienda";
    };
    if (options.icon == "veterinaria") {
      options.icon = "";
      iconName = "awesome-markerVeterinaria";
      options.className = "awesome-markerVeterinaria";
    };
    if (options.icon == "zapato") {
      options.icon = "";
      iconName = "awesome-markerZapato";
      options.className = "awesome-markerZapato";
    };

    if (options.icon == "computadora") {
      options.icon = "";
      iconName = "awesome-markerComputadora";
      options.className = "awesome-markerComputadora";
    };
    if (options.icon == "seguridad") {
      options.icon = "";
      iconName = "awesome-markerSeguridad";
      options.className = "awesome-markerSeguridad";
    };
    if (options.icon == "macrobiotica") {
      options.icon = "";
      iconName = "awesome-markerMacrobiotica";
      options.className = "awesome-markerMacrobiotica";
    };
    if (options.icon == "joyeria") {
      options.icon = "";
      iconName = "awesome-markerJoyeria";
      options.className = "awesome-markerJoyeria";
    };
    if (options.icon == "verdureria") {
      options.icon = "";
      iconName = "awesome-markerVerdureria";
      options.className = "awesome-markerVerdureria";
    };
    if (options.icon == "jugueteria") {
      options.icon = "";
      iconName = "awesome-markerJugueteria";
      options.className = "awesome-markerJugueteria";
    };
    if (options.icon == "muebleria") {
      options.icon = "";
      iconName = "awesome-markerMuebleria";
      options.className = "awesome-markerMuebleria";
    };
    if (options.icon == "pinturas") {
      options.icon = "";
      iconName = "awesome-markerPinturas";
      options.className = "awesome-markerPinturas";
    };
    if (options.icon == "localidades") {
      options.icon = "";
      iconName = "awesome-markerLocalidades";
      options.className = "awesome-markerLocalidades";
    };
    if (options.icon == "cancha") {
      options.icon = "";
      iconName = "awesome-markerCancha";
      options.className = "awesome-markerCancha";
    };
  },

  createIcon: function () {
    
    var div = document.createElement('div'), options = this.options;

    if (options.icon) {
      var aux = this._createInner();

      div.innerHTML =  aux;
    }

    if (options.bgPos) {
      div.style.backgroundPosition = (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
    }

    this._setIconStyles(div, 'icon-' + options.color);
    return div;
  },

  _createInner: function() {
    var iconClass;
    if(this.options.icon.slice(0,5)==="icon-"){
      iconClass=this.options.icon;
    }else{
      iconClass="icon-"+this.options.icon;
    }
    return "<i class='" + iconClass 
    + (this.options.spin ? " icon-spin" :"") 
    + (this.options.iconColor ? " icon-" + this.options.iconColor :"") + "'></i>";
  },

  _setIconStyles: function (img, name) {
    var options = this.options,
        size = L.point(options[name == 'shadow' ? 'shadowSize' : 'iconSize']),
        anchor;

    if (name === 'shadow') {
      anchor = L.point(options.shadowAnchor || options.iconAnchor);
    } else {
      anchor = L.point(options.iconAnchor);
    }

    if (!anchor && size) {
      anchor = size.divideBy(2, true);
    }

    img.className = iconName + '-' + name + ' ' + options.className;

    if (anchor) {
      img.style.marginLeft = (-anchor.x) + 'px';
      img.style.marginTop  = (-anchor.y) + 'px';
    }

    if (size) {
      img.style.width  = size.x + 'px';
      img.style.height = size.y + 'px';
    }
  },

  createShadow: function () {
    var div = document.createElement('div'),
        options = this.options;

    this._setIconStyles(div, 'shadow');
    return div;
  }
});
    
L.AwesomeMarkers.icon = function (options) {
  return new L.AwesomeMarkers.Icon(options);
};

}(this, document));



