var request,timer,sendCancel,isChecked,timer_off=!1,initialized=!1,events=acom_analytics.e,MENU_TIME=1500,PDF_MENU_TIME=3e3,FADE_TIME=1500;function sendMessage(e,t){"use strict";delete e.trefoilClick,util.messageToMain(e),delete e.newUI,delete e.trefoilUI,delete e.analytics,timer&&(clearTimeout(timer),timer=null),t||"dismiss"===e.content_op||sendCancel()}function analytics(e){"use strict";request.analytics||(request.analytics=[]),request.analytics.push(e)}function clearTimer(){"use strict";timer&&(clearTimeout(timer),timer=null),SETTINGS.IS_ERP_READER?$(".acrobatMainDiv").stop().css("display","none"):$(".acrobatMainDiv").stop().css("opacity",1)}function clearStatus(){"use strict";delete request.current_status,delete request.file_path,delete request.domtitle,delete request.timing,delete request.panel_op,delete request.is_pdf,delete request.trefoilUI,delete request.newUI}function sendCancel(){"use strict";clearStatus(),request.content_op="dismiss",request.main_op="relay_to_content",request.trefoilUI=!0,delete request.newUI,sendMessage(request)}function sendMsgtoPersistUI(e){1<request.version&&!SETTINGS.IS_ERP_READER&&!SETTINGS.IS_READER&&(0==e?(request.content_op="dismiss",request.main_op="relay_to_content",request.newUI=!0,analytics(events.PERSIST_PDF_MENU_CLOSED),sendMessage(request),delete request.content_op,delete request.main_op):1==e&&(request.panel_op="pdf_menu",request.main_op="relay_to_content",request.persist=!0,analytics(events.PERSIST_PDF_MENU_SHOWN),delete request.content_op,request.newUI=!0,sendMessage(request,!0),delete request.persist,delete request.panel_op,delete request.main_op))}function fadeAway(){"use strict";timer=null,$(".acrobatMainDiv").animate({opacity:0},FADE_TIME,"swing",sendCancel)}function setTimer(){"use strict";(SETTINGS.TEST_MODE||SETTINGS.DEBUG_MODE)&&(timer=1),timer||timer_off||(timer=setTimeout(function(){setTimeout(fadeAway)},request.is_pdf?PDF_MENU_TIME:MENU_TIME))}function upload(){"use strict";request.main_op="do_upload",request.handleResult="preview",analytics(events.PDF_MENU_UPLOAD_CLICKED),sendMessage(request)}function do_export(){"use strict";request.main_op="do_upload",request.handleResult="export",analytics(events.PDF_MENU_EXPORT_CLICKED),sendMessage(request)}function send(){"use strict";request.main_op="do_upload",request.handleResult="send",analytics(events.PDF_MENU_SEND_CLICKED),sendMessage(request)}function fillsign(){"use strict";request.main_op="do_upload",request.handleResult="fillsign",analytics(events.PDF_MENU_FILLSIGN_CLICKED),sendMessage(request)}function doAcrobat(){"use strict";request.main_op="open_in_acrobat",request.version===SETTINGS.READER_VER?analytics(events.TREFOIL_PDF_READER):analytics(events.TREFOIL_PDF_ACROBAT),sendMessage(request,!0)}function to_toggle(e){"use strict";isChecked=e,util.setCookie("ViewResultsPref",isChecked?"true":"false",3650),$(".do_set_open_pref").toggleClass("open-pdf-in-acrobat")}function to_html(e,t){"use strict";e&&to_toggle(t),SETTINGS.USE_ACROBAT?(request.main_op="convertToPDFPopupMenu",e&&(request.outputPath=e)):(request.handleResult="to_pdf",request.main_op="html_to_pdf"),sendMessage(request,!0),e||(analytics(events.TREFOIL_HTML_CONVERT_NEW),util.getCookie("ViewResultsPref")?analytics(isChecked?events.TREFOIL_HTML_CONVERT_OPEN_CHANGED:events.TREFOIL_HTML_CONVERT_NO_OPEN):analytics(events.TREFOIL_HTML_CONVERT_OPEN_DEFAULT))}function to_append(e){"use strict";SETTINGS.USE_ACROBAT&&(request.main_op="appendToExistingPDFPopupMenu",e&&(request.outputPath=e)),sendMessage(request,!0),e||(analytics(acom_analytics.e.TREFOIL_HTML_CONVERT_APPEND),util.getCookie("ViewResultsPref")?analytics(isChecked?events.TREFOIL_HTML_CONVERT_OPEN_CHANGED:events.TREFOIL_HTML_CONVERT_NO_OPEN):analytics(events.TREFOIL_HTML_CONVERT_OPEN_DEFAULT))}function initialize(){"use strict";initialized||(initialized=!0,$(".do_upload, .do_send, .do_fillsign, .do_export, .do_acrobat").click(function(e){var t=$(e.currentTarget);clearTimer(),t.hasClass("do_upload")&&upload(),t.hasClass("do_send")&&send(),t.hasClass("do_fillsign")&&fillsign(),t.hasClass("do_export")&&do_export(),t.hasClass("do_acrobat")&&doAcrobat()}),$(".do_visit_acom, .do_html_to_pdf").click(function(e){var t=$(e.currentTarget);clearTimer(),t.hasClass("do_visit_acom")&&(request.is_pdf?analytics(events.TREFOIL_PDF_VISIT_AIC):analytics(events.TREFOIL_HTML_VISIT_AIC),request.handleResult="acom",request.main_op="goto_acom",sendMessage(request)),t.hasClass("do_html_to_pdf")&&to_html()}),$(".close-dialog").click(function(){sendCancel()}),$(".acrobatMainDiv").hover(clearTimer,setTimer),$(".sign-out").click(function(){analytics(acom_analytics.e.SIGN_OUT_CLICKED),request.main_op="sign-out",sendMessage(request)}),$("#special").click(function(){analytics(events.FLICKR_OFFER_CLICKED),request.main_op="flickr",sendMessage(request)}),$(".do_html_add_to_pdf").click(function(){to_append()}),$(".do_set_open_pref").click(function(){isChecked=!(isChecked=$(".do_set_open_pref").hasClass("open-pdf-in-acrobat")),util.setCookie("ViewResultsPref",isChecked?"true":"false",3650),$(".do_set_open_pref").toggleClass("open-pdf-in-acrobat"),analytics(isChecked?acom_analytics.e.TREFOIL_HTML_OPENPDF_PREF_OFF:acom_analytics.e.TREFOIL_HTML_OPENPDF_PREF_ON),request.main_op="send-analytics",sendMessage(request,!0)}),$(".do-acro-prefs").click(function(){analytics(events.TREFOIL_HTML_PREFERENCES_CLICK),request.main_op="showConversionSettingsDialog",sendMessage(request)}),$(".convert").click(function(){$(".convert").hasClass("convert-button")&&(request.main_op="open_converted_file",sendMessage(request))}),$(".always-show").prop("checked","false"!==util.getCookie("always-show-pdf-menu")),$(".always-show").click(function(){var e=$(".always-show").prop("checked")?"true":"false";util.setCookie("always-show-pdf-menu",e,3650),"false"==e?sendMsgtoPersistUI(!1):"true"==e&&sendMsgtoPersistUI(!0)}))}function dump(e,t){"use strict";if(SETTINGS.DEBUG_MODE){var s,n=[t];for(s in e)e.hasOwnProperty(s)&&n.push("  "+s+": "+e[s]);console.log(n.join("\n"))}}function tester(e){"use strict";switch(util.consoleLog("TESTING"),util.consoleLogDir(JSON.stringify(e)),e.test_extension){case"upload":upload();break;case"export":do_export();break;case"send":send();break;case"fillsign":fillsign();break;case"to_html":to_html(e.outputPath,e.openPDF);break;case"doAcrobat":doAcrobat();break;case"to_append":to_append(e.outputPath)}}function setStatus(e){"use strict";var t,s,n,a=!0,i=!0,o=!1,r="web2pdfStatusFailure",l="web2pdfStatusComplete";if(e.test_extension)return tester(e);switch(e.version===SETTINGS.ERP_READER_VER&&(SETTINGS.IS_ERP_READER=!0),initialize(),delete(request=e).analytics,clearTimer(),timer_off=!1,util.translateElements(".translate"),1===request.version&&$("#web2pdfOpenButtonText").val(util.getTranslation("web2pdfOpenButtonTextOlder")),1!==request.version&&0!==request.version||$("#web2pdfShowPersistentOpen").text(util.getTranslation("web2pdfAlwaysShow")),request.version===SETTINGS.READER_VER&&($("#web2pdfOpenButtonText").val(util.getTranslation("web2pdfOpenButtonTextReader")),$("#web2pdfShowPersistentOpen").text(util.getTranslation("web2pdfAlwaysShow"))),$(".ui-element").addClass("hidden"),$("#action_message").text(""),request.displayName&&!SETTINGS.USE_ACROBAT&&($(".displayName").text(request.displayName),$(".sign-out").removeClass("hidden"),$(".action-signout").removeClass("hidden")),dump(request,"Receive frame message:"),s=request.panel_op,delete request.panel_op,s){case"pdf_menu":SETTINGS.USE_ACROBAT?$(".acro-option.pdf").removeClass("hidden"):$(".api-option.pdf").removeClass("hidden"),$(".acro-option.horizontal-rule").removeClass("hidden");break;case"error":$(".error").removeClass("hidden").text("Unexpected Error:"+request.error.name+"\nReference: "+request.error.errnum+"\n"+request.error.details);break;case"flickr":$(".action-available").removeClass("hidden"),$("#action_message").text("Create slide shows and contact sheets."),$(".special_question").removeClass("hidden"),$("#special").removeClass("hidden");break;case"status":$(".progress-area").removeClass("hidden"),$(".convert").text(request.domtitle),$(".convert-status, .convert-title").addClass("hidden"),$(".convert").removeClass("convert-button hidden"),"waiting"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_WAITING),t=util.getTranslation("web2pdfStatusWaiting"),a=!1):"downloading"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_DOWNLOADING),t=util.getTranslation("web2pdfStatusDownloading"),a=!1):"in_progress"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_IN_PROGRESS),t=util.getTranslation("web2pdfStatusInProgress"),a=!1):"filelocked"===request.current_status?t=util.getTranslation("web2pdfFileLockedError"):"cancelled"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_CANCELLED),t=util.getTranslation("web2pdfStatusCancelled"),o=!0):"complete"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_COMPLETE),request.file_path?($(".convert").text(util.getTranslation("web2pdfOpenInDCButtonText")),$(".convert").addClass("convert-button")):($(".convert").empty(),$(".convert").addClass("hidden"))):"failure"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_FAILED),request.message&&(t=request.message,t=$("<div/>").text(t).html()),i=!1):"noacrobat"===request.current_status?(analytics(events.TREFOIL_HTML_CONVERT_NO_ACROBAT),t=util.getTranslation("web2pdfUnsupportedAcrobatVersion"),i=!1):"unknown"===request.current_status?(t=util.getTranslation("web2pdfStatusUnknownFailure"),i=!1):"pdf_downloading"===request.current_status?(t=util.getTranslation("web2pdfStatusDownloadingPDF"),a=!1):"pdf_failure"===request.current_status?(analytics(events.TREFOIL_PDF_DOWNLOAD_FAILED),i=!(r="web2pdfStatusUnknownFailure")):"pdf_downloaded"===request.current_status?(t=util.getTranslation("web2pdfPDFOpening"),a=!1):"pdf_opened"===request.current_status?(i=!0,l="web2pdfPDFOpened"):"pdf_open_failed"===request.current_status&&(a=!(i=!1),r="web2pdfPDFOpenFailed"),t&&($(".convert-title").removeClass("hidden"),$(".convert-title").html(t)),a?(delete request.panel_op,$(".actions").removeClass("hidden"),n=SETTINGS.USE_ACROBAT?request.is_pdf?".acro-option.pdf":".acro-option.html":request.is_pdf?".api-option.pdf":".api-option.html",$(n).removeClass("hidden"),$(".convert").removeClass("convert-busy"),$(".convert-status").removeClass("hidden"),i?($(".convert-status-icon").addClass("icon-success"),$(".convert-status-title").text(util.getTranslation(l))):(timer_off=!0,$(".convert-status-icon").removeClass("icon-success"),$(".convert-status-icon").addClass("icon-error"),$(".convert-status-title").text(util.getTranslation(r)),$(".convert").addClass("hidden")),o&&($(".convert-status").addClass("hidden"),$(".convert").addClass("hidden"))):(timer_off=!0,$(".actions").addClass("hidden"),$(".convert").addClass("convert-busy"));break;case"html_menu":SETTINGS.USE_ACROBAT?$(".acro-option.html").removeClass("hidden"):$(".api-option.html").removeClass("hidden")}setTimer()}util.isChrome()&&$(function(){"use strict";initialize()}),util.addMainListener(setStatus),$(function(){"use strict";window.location.search&&(request=JSON.parse(decodeURIComponent(window.location.search.split("=")[1])),SETTINGS.TEST_MODE&&window.addEventListener("message",function(e){setStatus(e.data)},!1),setStatus(request),isChecked="false"!==util.getCookie("ViewResultsPref")&&($(".do_set_open_pref").addClass("open-pdf-in-acrobat"),!0))});