/*
 This file is part of RTK Anti Adblock.

    RTK Anti Adblock is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    RTK Anti Adblock is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with RTK Anti Adblock.  If not, see <http://www.gnu.org/licenses/>.
	
	===Usage===
	To use put the advert in a DIV with something unique to detect the advert via, for example I use "advert"
	Then copy the code used to display the advert, for example I use an inframe to display mine so I copied the iframe code
	The script will then detect once the page has loaded if the content has been modified then Bam! Your sent to adblockalert.php
	
	Include the javascript in all web pages that you wish to detect, DO NOT put it in the adblockalert.html
	
	Made By Ryan Walmsley, @Ryanteck, http://ryanteck.org.uk
*/

window.onload=function(){
var advertBlk = document.getElementById("advert");
var advertcode = 'Your Advert Code Here';
if(advertBlk.outerHTML != advertcode) {
console.log("Adblock Detected");
window.location.replace("adblockalert.html");
}};