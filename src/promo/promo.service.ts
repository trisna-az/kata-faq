import { Injectable } from '@nestjs/common';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { Model } from 'mongoose';
import { Promo } from './entities/promo.entity'
import { InjectModel } from '@nestjs/mongoose';
import { PromoTransformer } from './transformers/promo.transformer';
@Injectable()
export class PromoService {
constructor(@InjectModel('Promo') private PromoModel: Model<Promo>) { }
async create(createPromoDto: CreatePromoDto): Promise<PromoTransformer> {
    let data = new this.PromoModel(createPromoDto)
    return PromoTransformer.singleTransform(await data.save())
  }
async findAll(): Promise<PromoTransformer> {
    let data = await this.PromoModel.find()
if (data.length < 1) {
      return []
    }
return PromoTransformer.transform(data)
  }
async findOne(id: string): Promise<PromoTransformer> {
    console.log(id)
    let data = await this.PromoModel.findById(id)
if (!data) {
      throw new Error('Data not found!')
    }
return PromoTransformer.singleTransform(data)
  }
async update(id: string, updatePromoDto: UpdatePromoDto): Promise<PromoTransformer> {
    let data = await this.PromoModel.findByIdAndUpdate(id, updatePromoDto, { 'new': true })
    
    if (!data) {
      throw new Error("Promo is not found!")
    }
return PromoTransformer.singleTransform(data)
  }
async remove(id: string): Promise<String> {
    let data = await this.PromoModel.findByIdAndRemove(id)
    
    if (!data) {
      throw new Error("Promo is not found!")
    }
return "Promo has been deleted!"
  }
}