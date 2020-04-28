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

Route::group(['prefix' => 'auth'], function () {
    Route::post('signin', 'AuthController@signin');
    Route::post('signup', 'AuthController@signup');
    Route::post('signout', 'AuthController@signout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
});

Route::group(['prefix' => 'permissions'], function () {
    Route::get('/', 'PermissionController@index');
    Route::post('/', 'PermissionController@store');
    Route::get('{permission}', 'PermissionController@show');
    Route::patch('{permission}', 'PermissionController@update');
    Route::delete('{permission}', 'PermissionController@destroy');
});

Route::group(['prefix' => 'roles'], function () {
    Route::get('/', 'RoleController@index');
    Route::post('/', 'RoleController@store');
    Route::get('{role}', 'RoleController@show');
    Route::patch('{role}', 'RoleController@update');
    Route::delete('{role}', 'RoleController@destroy');
});

Route::group(['prefix' => 'users'], function () {
    Route::get('/', 'UserController@index');
    Route::post('/', 'UserController@store');
    Route::get('{user}', 'UserController@show');
    Route::patch('{user}', 'UserController@update');
    Route::delete('{user}', 'UserController@destroy');
});