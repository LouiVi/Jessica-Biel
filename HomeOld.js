"use strict"

var anims = [ "NewsPaper", "Jelly", "Flash", "RubberBand", "Swing", "Tada", "Bounce", "Fall", "FallRotate", "ShakeVertical", "ShakeHorizontal","BounceLeft", "BounceRight", "BounceTop", "BounceBottom", "ZoomIn", "FadeIn", "ScaleFromLeft", "ScaleFromRight", "ScaleFromTop", "ScaleFromBottom", "FlipFromLeft", "FlipFromRight", "FlipFromBottom", "FlipFromTop", "SlideFromLeft"];

//Create a Home object.
function Home( path, layContent )
{
		var self = this;
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    this.AnimateSplash = function ()
{
	var results = anims[utils.RandomIntegerRange(0, anims.length)]
	var results2 = anims[utils.RandomIntegerRange(0, anims.length)];
	//app.ShowPopup( results, "Short, Bottom" );
	img.Animate( results );
	img2.Animate( results2 );
}

    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) {
        lay.Animate("FadeIn");
        var sI = setInterval(self.AnimateSplash, 2200);
        }else{ lay.Animate( "FadeOut" );}
    }
    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a Mila Malenkov.
	var img = app.CreateImage( "Img/Jessica Biel.png", 0.983);//Img/952772a4-21c2-4587-9dee-f80b6a27b7e4.png", 0.8925 );
	lay.AddChild( img );
	img.Hide();
	
	//Add a Manuela Gonzalez.
	//var img2 = app.CreateImage( "Img/93fbf101-3fb9-4039-b130-60376cef2785.png", 1.28925 );
	var img2 = sup.CreateCircleImage( "Img/93fbf101-3fb9-4039-b130-60376cef2785.png", 0.918925 );
	img2.SetBorderWidth(5);
	img2.SetBorderColor(color.BLUE);
	img2.SetCircleBackColor(color.BLUE);
	lay.AddChild( img2 );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    //lay.AddChild( txt );
}