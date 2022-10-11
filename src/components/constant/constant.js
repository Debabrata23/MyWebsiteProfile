export function getimagesoure(image)
{
    let imgSrc;
    switch(image)
    {
        case "Deb.jpg":
            imgSrc=require('../../images/Deb.jpg');
            break;
        case "ms-share-point.png":
            imgSrc=require('../../images/ms-share-point.png');
            break;
        case "microsoft-sharepoint-2019.png":
            imgSrc=require('../../images/microsoft-sharepoint-2019.png');
            break;
        case "JS.png":
            imgSrc=require('../../images/JS.png');
            break;
        case "react-native.png":
            imgSrc=require('../../images/react-native.png');
            break;
        case "microsoft-power-apps-2020.png":
            imgSrc=require('../../images/microsoft-power-apps-2020.png');
            break;
        case "microsoft-power-automate-2020.png":
            imgSrc=require('../../images/microsoft-power-automate-2020.png');
            break;
        case "api-settings.png":
            imgSrc=require('../../images/api-settings.png');
            break;
        case "typescript.png":
            imgSrc=require('../../images/typescript.png');
            break;
        case "jquery.jpg":
            imgSrc=require('../../images/jquery.png');
            break;
        case "bootstrap":
            imgSrc=require('../../images/bootstrap.png');
            break;
        case "CERT-Fundamentals-Power-Platform.png":
            imgSrc=require('../../images/CERT-Fundamentals-Power-Platform.png');
            break;
        case "power-platform-developer-600x600.png":
            imgSrc=require('../../images/power-platform-developer-600x600.png');
            break;
        case "LTI":
            imgSrc=require('../../images/LTI_Lets_solve.png');
            break;
        case "EY GDS":
            imgSrc=require('../../images/EY.png');
            break;
        case "PWC India":
            imgSrc=require('../../images/pwc.jpg');
            break;
        case "Mindtree Ltd":
            imgSrc=require('../../images/mindtree.png');
            break;
        case "Acuvate Software Pvt LTD":
            imgSrc=require('../../images/acuvate.png');
            break;
        case "CMC Ltd(Presntly TCS)":
            imgSrc=require('../../images/CMC.png');
            break;

        default:
            break;
        
    }
    return imgSrc;
}