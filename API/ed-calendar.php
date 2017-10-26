
<?php
############Connection to Wordpress rest API
$url = 'http://softhouseeducation.se/wp-json';
$endpointseminars = '/wp/v2/pages?parent=16223&per_page=15';
$wpjsonseminars = $url.''.$endpointseminars;
$dataseminars = file_get_contents($wpjsonseminars);
$jsonseminars = json_decode($dataseminars, true);
$endpointcourses = '/wp/v2/pages?parent=15785&per_page=30';
$wpjsoncourses = $url.''.$endpointcourses;
$datacourses = file_get_contents($wpjsoncourses);
$jsoncourses = json_decode($datacourses, true);
######Empty DB for events
$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$manager->executeCommand('SHEVENT', new \MongoDB\Driver\Command(["drop" => "seminars"]));
$manager->executeCommand('SHEVENT', new \MongoDB\Driver\Command(["drop" => "courses"]));

/*$manager=new MongoDB\Driver\Manager();
$bulk1 = new MongoDB\Driver\BulkWrite;

$result = $manager->executeBulkWrite('SHEVENT.seminars', $bulk1);*/



function getBetween($content,$start,$end){
    $r = explode($start, $content);
    if (isset($r[1])){
        $r = explode($end, $r[1]);
        return $r[0];
    }
    return '';
}

function replacequote($event){
    $event = str_replace(array('\'', '"'), '', $event);
    return $event;
}
function replacecolon($event){
    $event = str_replace(array('\'', ':'), '', $event);
    $event = str_replace(array('\'', ';'), '', $event); 
    return $event;
}
############################Functions for fetching seminar information from API
function getseminarpic($event){
    $event = replacequote($event);
    $starteventpicture = "href=";
    $endeventpicture = "><img";
    $eventpicture = getBetween($event,$starteventpicture,$endeventpicture);
    if (getimagesize($eventpicture)==false)
    {
        $eventpicture="";
    }
    return $eventpicture;
}
function getseminardesc($event){
    $event = strip_tags($event, '<h3>');
    //$event = replacequote($event);
    $starteventdesc = " Om Ämnet";
    $endeventdesc = "Om Föreläsaren";
    $eventdesc = getBetween($event,$starteventdesc,$endeventdesc);
    $startdesc1 = "<b>";
    $enddesc1 = "</b>";
    $eventdesc1 = getBetween($eventdesc,$startdesc1,$enddesc1);
    return $eventdesc;
}
function getseminarspeakerinfo($event){
    $event = replacequote($event);
    $event = strip_tags($event, '<h3><img><a><p><b>');
    $starteventspeakerinfo = "</h3>\n<p>";
    $endeventspeakerinfo = "</p>";
    $eventspeakerinfo = getBetween($event,$starteventspeakerinfo,$endeventspeakerinfo);
    return $eventspeakerinfo;
}
function getseminarspeakername($event){
    $event = replacequote($event);
    $starteventspeakername = "widgettitle>";
    $endeventspeakername = "</h3>\n<p>";
    $eventspeakername = getBetween($event,$starteventspeakername,$endeventspeakername);
    return $eventspeakername;
}
function getseminarcontactpic($event){
    //$event = strip_tags($event, '<h3><img><a><p><b>');
    $event = replacequote($event);
    $startspeakpic = "<img src=";
    $endspeakpic = "class=jsjr-pci-photo";
    $eventspeakpic = getBetween($event,$startspeakpic,$endspeakpic);
    if (getimagesize($eventspeakpic)==false)
    {
        $eventpicture="";
    }
    return $eventspeakpic;
}
function getseminarcontactemail($event){
    $event = strip_tags($event, '<h3><img><a><p><b><h2><div>');
    $event = replacequote($event);
    $startspeakeremail = "jsjr-pci-email";
    $endspeakeremail = "jsjr-pci-phone";
    $eventspeakeremail = getBetween($event,$startspeakeremail,$endspeakeremail);
    $startspeakeremail1 = ">";
    $endspeakeremail1 = "<";
    $eventspeakeremail1 = getBetween($eventspeakeremail,$startspeakeremail1,$endspeakeremail1);
    return $eventspeakeremail1;
}
function getseminarcontactphone($event){
    $event = strip_tags($event, '<h3><img><a><p><b><h2><div>');
    $startspeakerphone = "jsjr-pci-phone";
    $endspeakerphone = "/n";
    $eventspeakerphone = getBetween($event,$startspeakerphone,$endspeakerphone);
    $startspeakerphone1 = ">";
    $endspeakerphone1 = "<";
    $eventspeakerphone = getBetween($eventspeakerphone,$startspeakerphone1,$endspeakerphone1);
    return $eventspeakerphone;
}
function getseminarcontactperson($event){
    $startcontact = "jsjr-pci-name";
    $endcontact = "jsjr-pci-email";
    $eventcontact = getBetween($event,$startcontact,$endcontact);
    $startcontact1 = ">";
    $endcontact1 = "<";
    $eventcontact = getBetween($eventcontact,$startcontact1,$endcontact1);
    return $eventcontact;

}
function getseminarprice($event){
    $event = strip_tags($event, '<b>');
    $event = replacequote($event);
    $event = replacecolon($event);
    $startprice = "Pris";
    $endprice = "Språk";
    $eventprice = getBetween($event,$startprice,$endprice);
    $startprice1 = ">";
    $endprice1 = "<";
    $eventprice = getBetween($eventprice,$startprice1,$endprice1);
    return $eventprice;
}
function getseminarlang($event){
    $event = replacequote($event);
    $event = replacecolon($event);
    $startlang = "Språk";
    $endlang = "DATUM";
    $eventlang = getBetween($event,$startlang,$endlang);
    $startlang1 = ">";
    $endlang1 = "<";
    $eventlang = getBetween($eventlang,$startlang1,$endlang1);
    return $eventlang;
}


function getseminarplacedate($event){
    $event = strip_tags($event, '<h3><img><a><p><b><h2><div>');
    $event = replacequote($event);
    $event = replacecolon($event);
    $startplacedate = "DATUM";
    $endplacedate = "/p";
    $eventplacedate = getBetween($event,$startplacedate,$endplacedate);
    return getseminardates($eventplacedate);
        
}


function getseminarplace($event){
    $event = strip_tags($event, '<h3><img><a><p><b><h2><div>');
    $event = replacequote($event);
    $event = replacecolon($event);
    $startplacedate = "DATUM";
    $endplacedate = "/p";
    $eventplacedate = getBetween($event,$startplacedate,$endplacedate);
    if (strpos($eventplacedate, 'Växjö') !== false) {
        return 'Växjö';
        
    }
    if (strpos($eventplacedate, 'Helsingborg') !== false) {
        return 'Helsingborg';
        
    }
    if (strpos($eventplacedate, 'Malmö') !== false) {
        return 'Malmö';
    }
    if (strpos($eventplacedate, 'Lund') !== false) {
        return 'Lund';
    }



}
function getseminarViewdates($eventplacedate){
    $pattern='~\d+\W+\w\w\w\s\d\d\d\d~';
    $success = preg_match($pattern, $eventplacedate, $match);
    $date2 = $match[0];
    return $date2;

}


/*function geteventmaterial($event){
    $event = replacestring($event);
    $starteventmaterial = "Material";
    $endeventmaterial = "Anmälan";
    $eventmaterial = getBetween($event,$starteventmaterial,$endeventmaterial);
    return $eventmaterial;
}*/ 
/*Metod för att hämta material som behövs till kursen, om det är något man vill 
implementera senare release*/
###############################Methods for fetching Courses from API
function getcontactname($event){
    $event = replacequote($event);
    $startcontactname = "jsjr-pci-name";
    $endcontactname = "/p>";
    $contactname = getBetween($event,$startcontactname,$endcontactname);
    $startcontactname1 = ">";
    $endcontactname1 = "<";
    $contactname = getBetween($contactname,$startcontactname1,$endcontactname1);
    return $contactname; 
    
}
function geteventdescr($event){
    $event = strip_tags($event, '<li><p><span><div><h3><ol><strong>');
    if (strpos($event, '>Kursbeskrivning') !== false){
       
        $event = replacequote($event);
        $starteventdesc = ">Kursbeskrivning";
        $endeventdesc = "Målgrupp";
        $eventdesc = getBetween($event,$starteventdesc,$endeventdesc);
        $starteventdesc1 = "<p>";
        $endeventdesc1 = "</p>";
        $eventdesc1 = getBetween($eventdesc,$starteventdesc1,$endeventdesc1);
       
    }
    if (strpos($event, '>About') !== false){
   
        $starteventdesc = "About ";
        $endeventdesc = "Trainer";
        $eventdesc = getBetween($event,$starteventdesc,$endeventdesc);
        $starteventdesc1 = "<p>";
        $endeventdesc1 = "</p>";
        $eventdesc1 = getBetween($eventdesc,$starteventdesc1,$endeventdesc1);
        
        
    }
    if (strpos($event, '>Kursinnehåll') !== false){
        
        $event = replacequote($event);
        $starteventdesc = ">Kursinnehåll";
        $endeventdesc = "Målgrupp";
        $eventdesc = getBetween($event,$starteventdesc,$endeventdesc);
        $starteventdesc1 = "<p>";
        $endeventdesc1 = "</p>";
        $eventdesc1 = getBetween($eventdesc,$starteventdesc1,$endeventdesc1);
        
    }
    
        $pattern='~^\w+.\w+~';
        $replacement = '';
        $eventdesc= preg_replace($pattern, $replacement, $eventdesc);
        $pattern='~<\W\w+>~';
        $replacement = '';
        $eventdesc= preg_replace($pattern, $replacement, $eventdesc);
        $pattern='~<\w+>~';
        $replacement = '';
        $eventdesc= preg_replace($pattern, $replacement, $eventdesc);
        $pattern='~<.+>~';
        $replacement = '';
        $eventdesc= preg_replace($pattern, $replacement, $eventdesc);

        return $eventdesc;
        
}
function geteventinfo($event){
    $event = strip_tags($event, '<li><p><span><div><h3><ol><strong>');
    if (strpos($event, 'INFORMATION<') !== false){
     
        $starteventinfo = "INFORMATION<";
        $endeventinfo = "<div";
        $eventinfo = getBetween($event,$starteventinfo,$endeventinfo);
       
    }
    if (strpos($event, 'DETAILS<') !== false){
      
      
        $starteventinfo = "DETAILS<";
        $endeventinfo = "</p>";
        $eventinfo = getBetween($event,$starteventinfo,$endeventinfo);
      
    }
  
        $pattern='~^\/\w+>~';
        $replacement = '';
        $eventinfo= preg_replace($pattern, $replacement, $eventinfo);
        $pattern='~<\W\w+>~';
        $replacement = '';
        $eventinfo= preg_replace($pattern, $replacement, $eventinfo);
        $pattern='~<\w+>~';
        $replacement = '';
        $eventinfo= preg_replace($pattern, $replacement, $eventinfo);
        $pattern='~<.+>~';
        $replacement = '';
        $eventinfo= preg_replace($pattern, $replacement, $eventinfo);
        return $eventinfo;
        

}
function getdates($eventinfo){
    $pattern='~\d+\W+\w\w\w\s\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }
    $pattern='~\w+\W\d\d,.\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }
    $pattern='~\w+.\d\d-\d\d,.\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }
    $pattern='~\w+.\d-\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }
    $pattern='~\d+\D\w\w\w\D\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }
    
    $pattern='~\d\s+\w+\S+\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }
   /* $pattern='~Malmö:.\d-\d\D\w+\D\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
    }*/
    $pattern='~Växjö:.\d+\W+\w\w\w\s\d\d\d\d~';
    $success = preg_match($pattern, $eventinfo, $match);
    if($success){
        $date2 = $match[0];
        $date2 = str_replace('Växjö:', '',$date2);

    }
  
   
    return $date2;
    
}
function changedateformat($date2){
    
    $pattern='~[a-zA-Z]+~';
    $success = preg_match($pattern, $date2, $match);
    $month = "";
    $day="";
    $year="";
    
    if($success){
        $month = $match[0];
    }
    
    $pattern='~-\d+~';
    $success1 = preg_match($pattern, $date2, $match);
    if($success1){
        $day = $match[0];
        $day = str_replace('-', '',$day);

    }
    $pattern='~\d+~';
    $success2 = preg_match($pattern, $date2, $match);
    if($success2){
        $day = $match[0];
       
       

    }
    $pattern='~\d+,~';
    $success3 = preg_match($pattern, $date2, $match);
    if($success3){
        $day = $match[0];
          $day = str_replace(',', '',$day);
       

    }

    
    
    $pattern='~\d\d\d\d~';
    $success4 = preg_match($pattern, $date2, $match);
    if($success4){
        $year = $match[0];
       
    }
    if (!preg_match('~\d\d\d\d~', $date2) && $success1 && ($success2 || $success3))
    {
        $year = "2017";
    } 
    
    

    $date2 = $day." ".$month." ".$year;
    
    
    return $date2;
  


}

function getnumericdates($date2){
    $pattern='~\W+~';
    $replacement = '-';
    $date1 = preg_replace($pattern, $replacement, $date2);
    $patternmonth='~[a-zA-Z]+~';
    
    if (strpos($date1, 'jan')!= false) {
        $replacement = 'January';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Jan')!= false) {
        $replacement = 'January';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'feb') != false){
        $replacement = 'February';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Feb') != false){
        $replacement = 'February';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'mar')!= false)  {
        $replacement = 'March';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Mar')!= false)  {
        $replacement = 'March';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'apr')!= false) {
        $replacement = 'April';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Apr')!= false) {
        $replacement = 'April';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'maj') != false) {
        $replacement = 'May';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Maj') != false) {
        $replacement = 'May';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if(strpos($date1, 'Jun')!= false) {
        $replacement = 'June';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if(strpos($date1, 'jun')!= false) {
        $replacement = 'June';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'jul') != false) {
        $replacement = 'July';
         $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Jul') != false) {
        $replacement = 'July';
         $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'aug') != false) {
        $replacement = 'August';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Aug') != false) {
        $replacement = 'August';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Sep') != false) {
        $replacement = 'September';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'sep') != false) {
        $replacement = 'September';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'Okt')!= false) {
        $replacement = 'October';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'okt')!= false) {
    
        $replacement = 'October';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'nov') != false) {
         $replacement = 'November';
         $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date2, 'Nov') !== false) {
        $replacement = 'November';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date1, 'dec') != false) {
        $replacement = 'December';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    if (strpos($date2, 'Dec') !== false) {
        $replacement = 'December';
        $date1 = preg_replace($patternmonth, $replacement, $date1);
    }
    $date1 = date("Y-m-d", strtotime($date1));
//$date1 = strtotime($date1);
//$newformat = date('Y-m-d',$date1);
    return $date1.'T23:59:59';
}

function getcontactphone($event){
   $event = replacequote($event);
   $starteventphone = "jsjr-pci-phone";
   $endeventphone = "/p>";
   $eventphone = getBetween($event,$starteventphone,$endeventphone);
   $starteventphone1 = ">";
   $endeventphone1 = "<";
   $eventphone = getBetween($eventphone,$starteventphone1,$endeventphone1);
   return $eventphone; 
}

function geteventpic($event){
    $event = replacequote($event);
    $starteventpicture = "img class";
    $endeventpicture = "alt";
    $eventpicture = getBetween($event,$starteventpicture,$endeventpicture);
    $pattern='~=([^;]*)=~';
    $replacement = '';
    $eventpicture= preg_replace($pattern, $replacement, $eventpicture);
    if (getimagesize($eventpicture)==false)
    {
        $eventpicture="";
    }
    return $eventpicture;
}
function getcontactemail($event){
   $event = replacequote($event);
   $starteventemail = "jsjr-pci-email";
   $endeventemail = "/p>";
   $eventemail = getBetween($event,$starteventemail,$endeventemail);
   $starteventemail1 = ">";
   $endeventemail1 = "<";
   $eventemail = getBetween($eventemail,$starteventemail1,$endeventemail1);
   return $eventemail;
}
function geteventcontactpic($event){
   $event = replacequote($event);
   $starteventpic = "<img src=";
   $endeventpic = "class=jsjr-pci-photo";
   $eventpic = getBetween($event,$starteventpic,$endeventpic);
   if (getimagesize($eventpic)==false)
   {
       $eventpicture="";
   }
   return $eventpic;
}

#################################Add seminars from API
foreach ($jsonseminars as &$value) {  
    $seminar = ($value[content]);
    $seminar = ($seminar[rendered]);
    $title = ($value[title]);
    $title = ($title[rendered]);
    //$eventid = ($value[id]);
    $title = preg_replace("/#?[a-z0-9]+;/i","",$title); 
    $seminar = preg_replace("/#?[a-z0-9]+;/i","",$seminar);
    $seminar = str_replace(array('\'', '&'), ' ', $seminar); 
    //$title = mb_convert_encoding($title, 'ISO-8859-1', 'HTML-ENTITIES');   
    $connection=new MongoDB\Driver\Manager();
    $bulk = new MongoDB\Driver\BulkWrite;
    $doc = array(
    //"eventID"=>$eventid,
    "type" => "seminar",
    "title" => $title,
    "imageUrl" => getseminarpic($seminar),
    "description" => getseminardesc($seminar),
    "speakerDescription" => getseminarspeakerinfo($seminar),
    "speakerFullName" => getseminarspeakername($seminar),
    "contactImageUrl" => getseminarcontactpic($seminar),
    "contactEmail" => getseminarcontactemail($seminar),
    "contactPhone" => getseminarcontactphone($seminar),
    "contactPerson" => getseminarcontactperson($seminar),
    "price" => getseminarprice($seminar),
    "language" => getseminarlang($seminar), 
    "location" => getseminarplace($seminar),
    "numericDate" => getnumericdates(getseminarViewDates($seminar)),
    "date"=> getseminarViewDates($seminar)
    );
    $bulk->insert($doc);
    $connection->executeBulkWrite('SHEVENT.seminars', $bulk);
    
}
######################################Add courses from API
foreach ($jsoncourses as &$value) { 
   
    $course = ($value[content]);
    $course = ($course[rendered]);      
    $title = ($value[title]);
    $title = ($title[rendered]);
    $title = preg_replace("/#?[a-z0-9]+;/i","",$title); 
    $course = preg_replace("/#?[a-z0-9]+;/i","",$course);
    $course = str_replace(array('\'', '&'), ' ', $course); 
    //$date3 = getdates(geteventinfo($event));


    //$date3 = changedateformat(getdates(geteventinfo($event)));
    
  
    //$title = mb_convert_encoding($title, 'ISO-8859-1', 'HTML-ENTITIES');   
    $connection=new MongoDB\Driver\Manager();
    $bulk = new MongoDB\Driver\BulkWrite;
    $doc = array(
    //"eventID"=>$eventid,
    "type" => 'Kurs',
    "title" => $title,
    "description" => geteventdescr($course),
    "courseInformation" => geteventinfo($course),
    "contactPhone" => getcontactphone($course),
    "imageUrl" => geteventpic($course),
    "contactEmail" => getcontactemail($course),
    "contactImageUrl" => geteventcontactpic($course),
    "courseContactName" => getcontactname($course),
    "numericDate" => getnumericdates(changedateformat(getdates(geteventinfo($course))))
   
    );
    $bulk->insert($doc);
    $connection->executeBulkWrite('SHEVENT.courses', $bulk);
}

#############################################Add courses from XML-file
$xml = simplexml_load_file('Kurser.xml');
foreach($xml->event as $event)
{
    $connection=new MongoDB\Driver\Manager();
    $bulk = new MongoDB\Driver\BulkWrite;
    
    $doc = array(
       
         "type" => 'Scrum',
         "title" => ((string)$event->title),
         "description"=> ((string)$event->description),
         "courseInformation"=> ((string)$event->courseInformation),
         "contactPhone" => ((string)$event->contactInfo->contactPhone),
         "contactEmail" => ((string)$event->contactInfo->contactEmail),
         "contactImageUrl" => ((string)$event->contactInfo->contactImage),
         "courseContactName" => ((string)$event->contactInfo->courseContactName),
         "numericDate"=> ((string)$event->date)


    );
    $bulk->insert($doc);
    $connection->executeBulkWrite('SHEVENT.courses', $bulk);
    
}
#########################Manually adding pictures to courses

    $bulk = new MongoDB\Driver\BulkWrite;
    $manager = new MongoDB\Driver\Manager();
    $bulk->update(
        ['title' => 'Agil kravhantering & från marknad till sprint backlogen'],
        ['$set' => ['imageUrl' => 'http://softhouseeducation.se/wp-content/uploads/2015/07/Education-Kurser-2.png']]
        
        //['multi' => false, 'upsert' => false]

);


    $bulk->update(
        
        ['title' => 'Kanban'],
        ['$set' => ['imageUrl' => 'http://softhouseeducation.se/wp-content/uploads/2015/07/Education-Kurser-5.png']]
       
        //['multi' => false, 'upsert' => false]

);


    $bulk->update(
       
        ['title' => 'Leda kontinuerlig förbättring & från team till organisationsnivå'],
        ['$set' => ['imageUrl' => 'http://softhouseeducation.se/wp-content/uploads/2017/07/Kopia-av-Copy-kurs_sem-2.png']]
        //['multi' => false, 'upsert' => false]

);

$manager -> executeBulkWrite('SHEVENT.courses', $bulk);


?>
