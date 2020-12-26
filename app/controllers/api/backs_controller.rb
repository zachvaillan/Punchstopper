class Api::BacksController < ApplicationController

    def create
        @back = Back.new(back_params)
        if @back.save
            p "SAVED"
        else
            render json: @back.errors.full_messages
        end
    end

    def back_params
        params.require(:back).permit(:backing_amount, :backer_id, :reward_id)
    end

end
