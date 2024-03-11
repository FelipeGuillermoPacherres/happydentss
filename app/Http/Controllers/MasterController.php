<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MasterController extends Controller
{
    public function indexView(){

        return view('home');
    }

    public function myLinksView(){
        return view('my-links');
    }
}
