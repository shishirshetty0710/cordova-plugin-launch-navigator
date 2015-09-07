
declare var launchnavigator: launchnavigator;

interface launchnavigator {
    navigate(navUrl:stirng, startAddress:string, success:()=>void, failure:(error:string)=>void,prefGoogleMaps:boolean) : void;
}
