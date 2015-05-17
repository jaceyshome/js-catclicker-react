/**
 * BearsController
 *
 * @description :: Server-side logic for managing bears
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * Fetches the bears
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    index: function(req, res)
    {
        Bear.find()
            .exec(function(err, bears)
            {

                return res.view('bears/index',
                {
                    bears: bears,
                })

            });
    },


    /**
     * `BearsController.show()`
     */
    show: function(req, res)
    {
        Bear.create(
            {
                name: 'Albin'
            })
            .exec(function(err, bear)
            {
                return res.json(
                {
                    ok: 'ok'
                })
            });
    },


    /**
     * `BearsController.edit()`
     */
    edit: function(req, res)
    {
        return res.json(
        {
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `BearsController.delete()`
     */
    delete: function(req, res)
    {
        return res.json(
        {
            todo: 'delete() is not implemented yet!'
        });
    }
};
