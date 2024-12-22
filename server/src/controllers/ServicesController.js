import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { servicesService } from "../services/ServicesService";


export class ServicesController extends BaseController {
    constructor() {
        super('api/services')
        this.router
            .get('', this.getAllServices)
            .get('/:serviceId', this.getServiceById)
            // .get('/:listingId/likes', this.getLikesByServiceId)
            // .get('/:listingId/comments', this.getCommentsByServiceId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createService)
            .put('/:serviceId', this.editService)
            // .delete('/:listingId', this.deleteService)
    }



    /**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
async getAllServices(request, response, next){
    try {
        const service = await servicesService.getAllServices()
        response.send(service)
    } catch (error) {
        next(error)
    }
}

/**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
async getServiceById(request, response, next){
    try {
        const serviceId = request.params.serviceId
        const service = await servicesService.getServiceById(serviceId)
        response.send(service)
    } catch (error) {
        next(error)
    }
}

        /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
   async createService(request, response, next) {
       try {
           const serviceData = request.body
           serviceData.creatorId = request.userInfo.id
           const service = await servicesService.createListing(serviceData)
           response.send(service)
        } catch (error) {
            next(error)
        }
    }
    
            /**
        * @param {import("express").Request} request
        * @param {import("express").Response} response
        * @param {import("express").NextFunction} next
        */
    async editService(request, response, next){
        try {
            const serviceData = request.body
            const serviceId = request.params.serviceId
            const userId = request.userInfo.id
            const service = await servicesService.editService(serviceData, serviceId, userId)
            response.send(service)
        } catch (error) {
            next(error)
        }
    }


}
