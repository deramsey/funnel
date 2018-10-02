$(document).ready(function(){
$(".red").hover(function(){
$(".description").text("At this level, your users know you exist. Nothing more. They don't really have any interest in you or what you have to say, but they do know you're in the world.");},
function(){$(".description").text("");
});
$(".green").hover(function(){
$(".description").text("At this level, you've got their attention. They don't want to subscribe yet, nor are they really even thinking about it. However, they'll come back to your page from time to time just to see what you had to say. ");},
function(){$(".description").text("");
});
$(".blue").hover(function(){
$(".description").text("At this level, your users are thinking about you. They're considering completing an action that would take them to the next level. They think they might want to buy that product or subscribe to your channel. They're just not quite sure yet.");},
function(){$(".description").text("");
});
$(".violet").hover(function(){
$(".description").text("At this level, you've gotten your users to do some sort of action that you want them to do. Whether it is buy a product, like or share a social media post, or subscribe to your channel. They might only do these things every so often, but they're doing them and you're getting real, actionable, responses.");},
function(){$(".description").text("");
});
$(".pink").hover(function(){
$(".description").text("At this level, you not only have a customer, but you have a return customer. These are the people who will come back to your platform every day; excited to see what you have to say. Whatever product you have, they're buying it.");},
function(){$(".description").text("");
});
});