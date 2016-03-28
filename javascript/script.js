var OSName="Unknown OS";
var os_detection = function(){
	
	if (navigator.appVersion.indexOf("Win")!=-1){ document.getElementsByClassName("drp-cnt-os")[0].setAttribute("style", "display:block"); OSName = "Windows";};
	if (navigator.appVersion.indexOf("Linux")!=-1){ document.getElementsByClassName("drp-cnt-os")[1].setAttribute("style", "display:block"); OSName = "Linux";};
	if (navigator.appVersion.indexOf("Mac")!=-1){ document.getElementsByClassName("drp-cnt-os")[2].setAttribute("style", "display:block"); OSName = "OSX";};
		


	
};
var close_dropdown = function(){
	if(OSName=="Windows"){
		document.getElementsByClassName("drp-cnt-os")[0].setAttribute("style", "display:none");
	}
	if(OSName=="Linux"){
		document.getElementsByClassName("drp-cnt-os")[1].setAttribute("style", "display:none");
	}
	if(OSName=="OSX"){
		document.getElementsByClassName("drp-cnt-os")[2].setAttribute("style", "display:none");
	}
}


