// Detect Browser from User Agent

// You need to detect the browser used by your client to show some part of your site for specifics browser

// Your objective :

//     Create a function that takes string and return the browser name.

// Examples

    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
    // ➞ "Google Chrome"

    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0"
    // ➞ "Mozilla Firefox"

    // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko" 
    // ➞ "Internet Explorer"


const detectBrowser = (userAgent) => {
	var str = '';
		if (userAgent.includes('Firefox')) {
				str = 'Mozilla Firefox'
		} else if (userAgent.includes('MSIE') || userAgent.includes('Microsoft')) {
				str = 'Internet Explorer'
		} else if (userAgent.includes('Chrome')) {
				str = 'Google Chrome'
		}
	return str;
}