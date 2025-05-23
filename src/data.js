export const API_KEY = 'AIzaSyDOzlj5YVk3B7tMAmtjTCnt66inRDwy2hI';
export const value_converter = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}