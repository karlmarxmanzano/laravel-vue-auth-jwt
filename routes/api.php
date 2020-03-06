<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group(['prefix' => 'auth'], function() {
//     Route::post('signin', 'SignInController');
//     Route::post('signout', 'SignOutController');
//     Route::get('signin', 'MeController');
// });

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('signin', 'AuthController@signin');
    Route::post('signup', 'AuthController@signup');
    Route::post('signout', 'AuthController@signout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
});