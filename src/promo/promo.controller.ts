import { Controller, Get, Post, Body, Param, Delete, Res, Put } from '@nestjs/common';
import { PromoService } from './promo.service';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { AppResponse } from 'src/response.base';
@Controller('promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) { }
@Post()
  async create(@Res() res, @Body() createPromoDto: CreatePromoDto) {
    try {
      let data = await this.promoService.create(createPromoDto)
      return AppResponse.ok(res, data, "Success create promo!")
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Get()
  async findAll(@Res() res) {
    try {
      let data = await this.promoService.findAll();
      return AppResponse.ok(res, data)
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    try {
      let data = await this.promoService.findOne(id);
      return AppResponse.ok(res, data)
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatePromoDto: UpdatePromoDto) {
    try {
      let data = await this.promoService.update(id, updatePromoDto);
      return AppResponse.ok(res, data, "Promo has been updated!")
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    try {
      let data = await this.promoService.remove(id);
      return AppResponse.ok(res, "", data)
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
}