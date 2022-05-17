<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Throwable;

use function PHPUnit\Framework\returnSelf;

class HomeController extends Controller
{
    public function index(){

        $posts = Post::all();

        return Inertia::render('Home',['posts'=>$posts]);
    }

    public function create(){

       
        return Inertia::render('Create');
        
        
    }

    public function store(StorePostRequest $request){

        try{
            Post::create($request->validated());
            return Redirect()->route('home');

        }catch(Throwable $throwable){
            return 'erro no cadastro'. $throwable->getMessage();

        }
 
    }

    public function destroy(Request $request){
    
      Post::find($request['id'])->delete();  
      return Redirect()->route('home');
    }

    public function edit(Request $request){

        $posts = Post::find($request['id'])->get();

        return Inertia::render('Edicao',['posts'=>$posts]);

    }

    public function update(Request $request){
        $id = $request->get('id');
         $post =  Post::find($id);
        if($post){  
            // o metodo update só recebe um array como parametro por isso devemos passar o metodo all()
            $post->update($request->all());
            return Redirect()->route('home');

            }
    }
}
