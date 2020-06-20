class LikesController < ApplicationController
  def index
        if user_signed_in?
          render json: Like.all
        else
          render json: {}, status: 401
        end
      end

  def show
    if user_signed_in?
      like = Like.find_by(item_id: params[:id])
      if like
        render json: Like.find(like.id)
      end
    else
      render json: {}, status: 401
    end
  end

  def create
    if user_signed_in?
      # binding.pry

      if like = Like.find_by(item_id: params["item_id"])

        updated_vote = like["vote"] + 1
        if like.update(vote: updated_vote)
          render json: like, status: :updated
        else
          render json: like.errors, status: 400
        end

      else
        if like = Like.create(like_params)
          like.update(vote: 1)
          render json: like, status: :created
        else
          render json: like.errors, status: 400
        end
      end

    else
      render json: {}, status: 401
    end
  end

  def like_params
      params.require(:like).permit(:item_id, :vote)
  end
end
