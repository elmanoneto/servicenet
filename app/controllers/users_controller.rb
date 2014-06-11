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

  def show
  	@user = User.find(params[:id])
    respond_to do |format|
      format.json { render json: @user }
    end
  end

  def update
  	senha = params[:senha].crypt('aa')

    if User.find_by_id(params[:id]).update_attributes(nome: params[:nome], email: params[:email], nascimento: params[:nascimento], senha: senha)
    	respond_to do |format|
        	format.json { render json: 'Usuário atualizado' }
      	end
    end
  end

end
