
declare var launchnavigator: launchnavigator;

interface launchnavigator {
    navigate(navUrl:string, startAddress:string, success:()=>void, failure:(error:string)=>void,mapPref:{preferGoogleMaps:boolean}) : void;
}
