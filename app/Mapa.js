/*
 * JS for Mapa generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '3f7f842c-ce23-458a-bb70-b956c5482179';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Mapa",
    "location": "Mapa.html"
}, {
    "name": "Products",
    "location": "Products.html"
}, {
    "name": "Account",
    "location": "Account.html"
}];

function Mapa_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'Mapa_mobilebutton_11',
        'mobileworkarea_10': 'Mapa_mobileworkarea_10',
        'mobilebutton_20': 'Mapa_mobilebutton_20',
        'mobilelabel_12': 'Mapa_mobilelabel_12',
        'mobilelabel_13': 'Mapa_mobilelabel_13',
        'googlemap_16': 'Mapa_googlemap_16',
        'marker_17': 'Mapa_marker_17',
        'mobilelabel_18': 'Mapa_mobilelabel_18',
        'mobilelabel_19': 'Mapa_mobilelabel_19',
        'mobilelist_3': 'Mapa_mobilelist_3',
        'mobilelistitem_4': 'Mapa_mobilelistitem_4',
        'mobilelistitembutton_5': 'Mapa_mobilelistitembutton_5',
        'mobilelistitem_6': 'Mapa_mobilelistitem_6',
        'mobilelistitembutton_7': 'Mapa_mobilelistitembutton_7',
        'mobilelistitem_8': 'Mapa_mobilelistitem_8',
        'mobilelistitembutton_9': 'Mapa_mobilelistitembutton_9'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["Mapa_geolocation1_onsuccess_mapping_0"] = {
        "homeScreen": "Mapa",
        "directions": [

        {
            "from_name": "geolocation1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Mapa",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$['mobilelabel_12:text']"

            },

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$['mobilelabel_13:text']"

            },

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$['googlemap_16:latitude']"

            },

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$['googlemap_16:longitude']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Mapa_geolocation1_onbeforesend_mapping_0"] = {
        "homeScreen": "Mapa",
        "directions": [

        {

            "to_name": "geolocation1",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "options": {
                        "maximumAge": 3000,
                        "timeout": 5000,
                        "enableHighAccuracy": true,
                        "watchPosition": false
                    }
                }
            },

            "mappings": []
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.geolocation1 = Apperyio.datasources.geolocation1 = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Mapa_geolocation1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Mapa_geolocation1_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Mapa';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Mapa_onLoad = function() {
            Mapa_elementsExtraJS();

            Mapa_deviceEvents();
            Mapa_windowEvents();
            Mapa_elementsEvents();
        };

    // screen window events


    function Mapa_windowEvents() {

        $('#Mapa').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Mapa_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Mapa_elementsExtraJS() {
        // screen (Mapa) extra code

        /* googlemap_16 */

        $("[name = 'googlemap_16']").wrap("<div/>");
        $("[name = 'googlemap_16']").parent().css("margin-left", $("[name = 'googlemap_16']").css("margin-left"));
        $("[name = 'googlemap_16']").parent().css("margin-right", $("[name = 'googlemap_16']").css("margin-right"));
        $("[name = 'googlemap_16']").css("margin-left", '0');
        $("[name = 'googlemap_16']").css("margin-right", '0');

        var googlemap_16_options = {
            markerSourceName: "googlemap_16_markers",
            latitude: "",
            longitude: "",
            address: "San Francisco, CA",
            zoom: 10,
            showLocationMarker: false
        }

        Apperyio.__registerComponent('googlemap_16', new Apperyio.ApperyMapComponent("googlemap_16", googlemap_16_options));
        $("[name='googlemap_16_markers'] [apperytype='marker']").attr("reRender", "googlemap_16");

        function __update_googlemap_16(event, ui) {
            if (($('#Mapa_googlemap_16', ui.toPage).length > 0) && (Apperyio('googlemap_16') != undefined) && (Apperyio('googlemap_16').isInitialized)) {
                Apperyio('googlemap_16').refresh();
            }
        }
        $(":mobile-pagecontainer").off("pagecontainershow.Mapa_mobilecontainer1", __update_googlemap_16).on("pagecontainershow.Mapa_mobilecontainer1", __update_googlemap_16);

        /* mobilelist_3 */

        listView = $("#Mapa_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Mapa_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

        /* mobilelistitem_8 */

    };

    // screen elements handler


    function Mapa_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Mapa_mobileheader1 [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Mapa_panel_menu"]').panel("open");

                }
            },
        }, '#Mapa_mobileheader1 [name="mobilebutton_11"]');

        $(document).off("click", '#Mapa_mobilecontainer1 [name="mobilebutton_20"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        geolocation1.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#Mapa_mobilecontainer1 [name="mobilebutton_20"]');

        $(document).off("click", '#Mapa_panel_menu [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Mapa', {
                        reverse: false
                    });

                }
            },
        }, '#Mapa_panel_menu [name="mobilelistitem_4"]');

        $(document).off("click", '#Mapa_panel_menu [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Products', {
                        reverse: false
                    });

                }
            },
        }, '#Mapa_panel_menu [name="mobilelistitem_6"]');

        $(document).off("click", '#Mapa_panel_menu [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Account', {
                        reverse: false
                    });

                }
            },
        }, '#Mapa_panel_menu [name="mobilelistitem_8"]');

    };

    $(document).off("pagebeforeshow", "#Mapa").on("pagebeforeshow", "#Mapa", function(event, ui) {
        Apperyio.CurrentScreen = "Mapa";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Mapa_onLoad();
};

$(document).off("pagecreate", "#Mapa").on("pagecreate", "#Mapa", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Mapa_js();
});