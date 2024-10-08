const mapDBToModel = ({ 
    id,
    title,
    year, 
    genre, 
    performer, 
    duration,
    album_id,
    created_at,
    updated_at,
  }) => ({
    id,
    title,
    year, 
    genre, 
    performer, 
    duration,
    album_id,
    createdAt: created_at,
    updatedAt: updated_at,
  });
   
  module.exports = { mapDBToModel };
  