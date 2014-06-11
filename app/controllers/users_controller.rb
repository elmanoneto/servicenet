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

end
