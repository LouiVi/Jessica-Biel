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
	var col1 = utils.RandomHexColor(true);
	var col2 = utils.RandomHexColor(true);
	img.SetBorderWidth(5);
	img.SetBorderColor(col1);
	img.SetCircleBackColor(col1);
	img2.SetBorderWidth(5);
	img2.SetBorderColor(col2);
	img2.SetCircleBackColor(col2);
	
	var rColor = utils.RandomHexColor(true);
	var u5 = utils.RandomIntegerRange(0,2);
	//app.ShowPopup( u5 );
	if(u5==1){
		img.SetBackGradient( utils.GetGradientColors(rColor)[0], rColor, utils.GetGradientColors(rColor)[1]);
	}else{
		img2.SetBackGradient( utils.GetGradientColors(rColor)[0], rColor, utils.GetGradientColors(rColor)[1]);
	}
	
    
  
	
	var results = anims[utils.RandomIntegerRange(0, anims.length)]
	var results2 = anims[utils.RandomIntegerRange(0, anims.length)];
	//app.ShowPopup( results, "Short, Bottom" );
	img.Animate( results );
	img2.Animate( results2 );
	var u1 = utils.RandomIntegerRange(1,25);
	var u2 = utils.RandomIntegerRange(1,25);
	if(u1<10){
		img2.SetImage("Img/0" + u1 + ".png");
	}else{
	img2.SetImage("Img/" + u1 + ".png");
	}
	if(u2<10){
		img.SetImage("Img/0" + u2 + ".png");
	}else{
	img.SetImage("Img/" + u2 + ".png");
	}
	var u3 = utils.RandomIntegerRange(0,10);
	var u4 = utils.RandomIntegerRange(0,2);
	var pic;
	if(u3>=5){
		pic = img;
	}else{
		pic = img2;
	}
	
		if(u4==1){
		self.Tween1(pic);
	}else{
		self.Tween2(pic);
	}
	
	
}

    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) {
        lay.Animate("FadeIn");
        var sI = setInterval(self.AnimateSplash, 2200);
        }else{ lay.Animate( "FadeOut" );}
    }
    
    this.Tween1 = function(picture)
{
    var target = { x:0.5, y:0.5, sw:0.5, sh:0.5, rot:360 };
    picture.Tween( target, utils.RandomIntegerRange(0,2500), "Exponential.Out", 1, true);//, self.Tween2 );
}

this.Tween2 = function(picture)
{
    var target = { x: 0.8, y:[0.6,0.3,0.6], rot: 360*utils.RandomIntegerRange(1, 5) };
    picture.Tween( target, utils.RandomIntegerRange(0, 2000) );
}
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a Mila Malenkov.
	var img = sup.CreateCircleImage( "Img/Jessica Biel.png", utils.RandomIntegerRange(0,5));// 0.02983);//Img/952772a4-21c2-4587-9dee-f80b6a27b7e4.png", 0.8925 );
	img.SetBorderWidth(5);
	img.SetBorderColor(color.RED);
	img.SetCircleBackColor(color.RED);
	lay.AddChild( img );
	img.Hide();
	
	//Add a Manuela Gonzalez.
	//var img22 = app.CreateImage( "Img/93fbf101-3fb9-4039-b130-60376cef2785.png", 1.28925 );
	var img2 = sup.CreateCircleImage( "Img/02.png", utils.RandomIntegerRange(0,5));//0.918925 );
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