<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// ---------- rotas da aplicação --------//



//rota para para a pagina de criação de nota
Route::post('/create', [HomeController::class,'create']);
//rota para pagina de edição
Route::post('/edit', [HomeController::class,'edit']);


//-------- rotas para o banco de dados ------//

//rota para savar a nota no bd
Route::post('/store', [HomeController::class,'store']);
//rota para atualizar dados
Route::post('/update', [HomeController::class,'update']);
// rota para deletar nota
Route::post('/destroy', [HomeController::class,'destroy']);
// rota para mostrar dados no home
Route::get('/', [HomeController::class,'index'])->name('home');
