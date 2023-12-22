import React from 'react'

const Affichelivres = () => {
  return (
    <div>
         <button className='btn btn-success' onClick={() => addlivre()}>Ajouter</button> <br/>
            <input type='text' placeholder='isbn' name='isbn' value={livre.isbn}
                onChange={(e) => setLivre({ ...livre, isbn: e.target.value })} />
            <input type='text'  placeholder='titre' name='titre' value={livre.titre}
                onChange={(e) => setLivre({ ...livre, titre: e.target.value })} />
            <input type='text'  placeholder='auteur' name='auteur' value={livre.auteur}
                onChange={(e) => setLivre({ ...livre, auteur: e.target.value })} />
            <input type='text' placeholder='prix' name='prix' value={livre.prix}
                onChange={(e) => setLivre({ ...livre, prix: e.target.value })} />

            <input type='text'  placeholder='photo' name='couverture' value={livre.couverture}
                onChange={(e) => setLivre({ ...livre, couverture: e.target.value })} />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Prix</th>
                        <th>Couverture</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {livres.map((l, index) =>
                        <tr key={index}>
                            <td>{l.isbn}</td>
                            <td>{l.titre}</td>
                            <td>{l.auteur}</td>
                            <td>{l.prix}</td>
                            <td><img src={l.couverture} width={80} height={80} /></td>
                            <td><button className='btn btn-warning'>Update</button></td>
                            <td><button className='btn btn-danger'
                                onClick={() => handleDelete(l.isbn)}>Delete</button></td>
                        </tr>

                    )}
                </tbody>

            </table>
    </div>
  )
}

export default Affichelivres