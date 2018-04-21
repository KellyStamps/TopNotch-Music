class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, foreign_key: true
      t.string :album_name
      t.string :artist_name
      t.string :artist_url
      t.string :album_img
      t.timestamps
    end
  end
end
