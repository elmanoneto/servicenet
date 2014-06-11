class UsersController < ApplicationController

  def index
  	@users = User.all
    respond_to do |format|
      format.json { render json: @users }
    end
  end

  def destroy
  	if User.destroy(params[:id])
	    respond_to do |format|
	      format.json { render json: 'Usuário excluído' }
	    end
	end
  end

  def create
  	senha = params[:senha].crypt('aa')
  	if User.create(nome: params[:nome], email: params[:email], nascimento: params[:nascimento], senha: senha)
  		respond_to do |format|
	      format.json { render json: 'Usuário cadastrado' }
	    end
	end
  end

end
