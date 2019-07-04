function funnyString(s) {

	let r = s.split("").reverse().join("");

	for (let i = 1; i < s.length; i++) {

        if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) !== Math.abs(r.charCodeAt(i) - r.charCodeAt(i - 1))) {

            return "Not Funny"
        }
	   
	}

	return "Funny"

}
funnyString("lmnoz");