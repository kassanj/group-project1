class AddCreateCommentsToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :create_comments, :reference
  end
end
